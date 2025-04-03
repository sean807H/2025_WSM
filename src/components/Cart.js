import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import "../style/cart.css";

function Cart({ cartItems, updateQuantity, removeFromCart, clearCart }) {
    const calculateTotal = () => cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    const formatPrice = (price) => price.toLocaleString() + "원";

    return (
        <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>No items in your cart</p>
                    <Link to="/" className="cart-shopping-link">Go Shopping</Link>
                </div>
            ) : (
                <>
                    <div className="cart-header">
                        <span>Product</span>
                        <span>Count</span>
                        <span>Total</span>
                    </div>
                    <div className="cart-item-list">
                        {cartItems.map((item) => (
                            <CartItem key={item.product.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                        ))}
                    </div>
                    <div className="cart-summary">
                        <p className="cart-total">Total: {formatPrice(calculateTotal())}</p>
                        <button className="cart-clear-btn" onClick={clearCart}>Clear Cart</button>
                        <button className="cart-checkout-btn" onClick={() => alert('no code')}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
