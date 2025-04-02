import React from "react";
import ProductItem from "./ProductItem";

// 상품 목록 렌더링
function ProductList({products, addToCart, categoryFilter=null, searchTerm=''}){
    // 카테고리 필터 적용
    // filter() 메서드 : 주어진 조건을 만족하는 요소만 포함하는 new 배열을 반환
    let filteredProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products
    
    // 검색어 필터 적용(**대소문자 구분 제거**)
    if(searchTerm){
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            product.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
    }

    return (
        <div className="product-list-container">
            {filteredProducts.length === 0 ? (
                <div>
                    <p>검색 결과가 없습니다!</p>
                </div>
                ) : (
                    <div>
                        {/* map() : 배열의 각 요소를 변환해서 new 배열 반환 */}
                        {filteredProducts.map((product) => (
                            // 디버깅 이해쉬움 유지보수 재사용 협업
                            // 컴포지션 패턴 : 상속보다는 합성을 사용해라(UI를 작은 조각으로 나누고 조합해서 큰 UI를 만들기)
                            <ProductItem
                                // key : React 최적화를 위해 필수
                                key = {product.id}
                                product={product}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default ProductList