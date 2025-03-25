import react from "react";
import {Link} from "react-router-dom"
import SearchBar from './SearchBar'

function Header({cartItemCount, onSearch}){
    return(
        <Header>
            <div className="logo">
                <Link to="/">
                    <h1>리액트 쇼핑몰</h1>
                </Link>

                <nav>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/category/의류">의류</Link></li>
                    <li><Link to="/category/전자기기">전자기기</Link></li>
                    <li><Link to="/category/액세서리">액세서리</Link></li>
                </nav>
            </div>

            <div>
                {/* 검색 호출 콜백 함수 */}
                <SearchBar onSearch={onSearch}/>

                <div>
                    <Link to="/cart">
                        <span>shopping_cart</span>
                        {/* 조건부 랜더링 */}
                        {cartItemCount > 0 && (
                            <span>{cartItemCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </Header>
    )
}

export default Header;