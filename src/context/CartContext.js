import React, { createContext, useContext, useReducer, useEffect } from 'react';

// 초기 상태
const initialState = {
    cartItems: [],
};

// 로컬 스토리지에서 장바구니 데이터 불러오기
const loadCartFromStorage = () => {
    try {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : initialState;
    } catch (error) {
        console.error('장바구니 데이터를 불러오는 중 오류 발생:', error);
        return initialState;
    }
};

// 장바구니 리듀서 함수
// 장점!!!!!!!!!
// 1.상태 변화의 중앙화
// 2.예측 가능한 상태변화 ( 정의된 방식으로만 상태 변경 )
// 3.시간여행 디버깅 지원( 상태 변화가 쉽게 추적가능하다 )
const cartReducer = (state, action) => {
    let newState;

    switch (action.type) {
        case 'ADD_TO_CART': {
            const { product, quantity = 1 } = action.payload;
            const existingItemIndex = state.cartItems.findIndex(
                item => item.product.id === product.id
            );

            if (existingItemIndex !== -1) {
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingItemIndex] = {
                    ...updatedCartItems[existingItemIndex],
                    quantity: updatedCartItems[existingItemIndex].quantity + quantity
                };
                newState = { ...state, cartItems: updatedCartItems };
            } else {
                newState = { ...state, cartItems: [...state.cartItems, { product, quantity }] };
            }
            break;
        }
        
        case 'UPDATE_QUANTITY': {
            const { productId, quantity } = action.payload;
            const updatedCartItems = state.cartItems.map(item =>
                item.product.id === productId ? { ...item, quantity } : item
            );
            newState = { ...state, cartItems: updatedCartItems };
            break;
        }
        
        case 'REMOVE_FROM_CART': {
            const productId = action.payload;
            newState = { ...state, cartItems: state.cartItems.filter(item => item.product.id !== productId) };
            break;
        }
        
        case 'CLEAR_CART': {
            newState = { ...state, cartItems: [] };
            break;
        }
        
        default:
            throw new Error(`지원되지 않는 액션 타입: ${action.type}`);
    }

    localStorage.setItem('cart', JSON.stringify(newState));
    return newState;
};

// Context 생성
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState, loadCartFromStorage);

    const addToCart = (product, quantity = 1) => {
        dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const getCartItemCount = () => {
        return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, updateQuantity, removeFromCart, clearCart, getCartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart는 CartProvider 내부에서만 사용할 수 있습니다');
    }
    return context;
};

 // 불변성의 중요성!!!
// 스프레드 연산자, 배열 메서드를 사용하여 불변성 유지