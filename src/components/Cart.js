import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

function Cart({ cartItems, updateQuantity, removeFromCart, clearCart }) {
  const calculateTotal = () => {
    return cartItems.redude((total, item) => {
      return total+(item.product.price * item.quantity)
    }, 0)
  }

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ") + "원"
  }

  const handleCheckout = () => {
    alert('no code')
  }
  
  return (
    <div>
      <h2>cart</h2>
      {cartItems.length===0}?(
        <div>
          <p>no items</p>
          <Link to='/'>go shopping</Link>
        </div>
      ) : (
        <>
        <div>
          <span>product</span>
          <span>count</span>
          <span>total</span>
          <span></span>
        </div>
        </>
      )
    </div>
  )
}

export default Cart