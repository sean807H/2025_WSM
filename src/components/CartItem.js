import React from 'react';

function CartItem({ item, updateQuantity, removeFromCart }) {
    const { product, quantity } = item;

    const handleIncrease = () => updateQuantity(product.id, quantity + 1);
    const handleDecrease = () => { if (quantity > 1) updateQuantity(product.id, quantity - 1); };
    const handleRemove = () => removeFromCart(product.id);

    const formatPrice = (price) => price.toLocaleString() + "원";

    return (
        <div className="cart-item">
            <img src={product.imageUrl} alt={product.name} />
            <div className="cart-item-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </div>
            <div className="cart-item-quantity">
                <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
            </div>
            <p className="cart-item-total">{formatPrice(product.price * quantity)}</p>
            <button className="cart-item-remove" onClick={handleRemove}>X</button>
        </div>
    );
}

export default CartItem;
