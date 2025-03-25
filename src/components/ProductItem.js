// 개별 상품을 표시하는 컴포넌트
function ProductItem({product, addToCart}){
    const {id, name, price, imageUrl, category} = product;

    const handleAddToCart=()=>{
        addToCart(product);
    };  // 현재 상품(product)을 장바구니에 추가

    const formatPrice=(price)=>{
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"원";
        // 25000 -> 25,000원 (3자리마다 쉼표를 삽입하고 마지막에 원을 붙인다)
    };

    return(
        <div>
            <div className="product-image">
                {/* 백틱(Template Literals)을 사용하여 동적으로 URL을 생성 */}
                {/*a태그와 달리 <Link>를 이용하면 전체(UI) 페이지 새로고침 없이 빠르게 이동할 수 있음 */}
                <Link to={`/product/${id}`}>
                    <img src={imageUrl} alt={name}/>
                </Link>
            </div>

            <div className="product-info">
                <span>{category}</span>
                <h3>
                    <Link to={`/product/${id}`}>{name}</Link>
                </h3>
                <p>{formatPrice(price)}</p>
            </div>

            <div className="product-actions">
                <button
                    onClick={handleAddToCart}>장바구니 추가</button>
            </div>
        </div>
    );
}

export default ProductItem;