import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import "../style/productdetailpage.css"

function ProductDetailPage({ products, addToCart }) {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="product-detail-container">
        <h2>상품을 찾을 수 없습니다.</h2>
        <Link to='/' className="continue-shopping">홈으로 돌아가기</Link>
      </div>
    )
  }

  const handleIncrease = () => setQuantity(quantity + 1)
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1)

  const handleAddToCart = () => addToCart(product, quantity)

  const formatPrice = (price) => price.toLocaleString() + "원"

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        {/* 상품 이미지 */}
        <div className="product-detail-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>

        {/* 상품 정보 */}
        <div className="product-detail-info">
          <span>{product.category}</span>
          <h1>{product.name}</h1>
          <p>{formatPrice(product.price)}</p>

          {/* 수량 조절 버튼을 가격 바로 아래 배치 */}
          <div className="product-quantity-container">
            <button className="quantity-button" onClick={handleDecrease} disabled={quantity <= 1}>-</button>
            <span>{quantity}</span>
            <button className="quantity-button" onClick={handleIncrease}>+</button>
          </div>

          <div className="product-description">
            <h3>상품 설명</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        장바구니에 추가
      </button>

      <Link to='/' className="continue-shopping">← 계속 쇼핑하기</Link>
    </div>
  )
}

export default ProductDetailPage
