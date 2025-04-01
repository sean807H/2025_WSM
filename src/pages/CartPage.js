import React from "react";
import Cart from "../components/Cart";

function CartPage({cartItems, updateQuantity, removeFromCart, clearCart}){
    return(
        <div className="cart-page">
            <Cart
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}           b
                clearCart={clearCart}
                />
        </div>
    );
}
export default CartPage;