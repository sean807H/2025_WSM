import React from "react"
import { Link } from "react-router-dom"
import SearchBar from './SearchBar'
import "../style/header.css";

function Header({cartItemCount, onSearch}) {
    return(
        <header>
            <div className="logo">
                <Link to="/">
                    <h1>리액트 쇼핑몰</h1>
                </Link>
            </div>
            
            <nav>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/category/의류">의류</Link></li>
                <li><Link to="/category/전자기기">전자기기</Link></li>
                <li><Link to="/category/액세서리">액세서리</Link></li>
            </nav>

            <div className="search-cart-container">
                <SearchBar onSearch={onSearch} />

                <div className="cart">
                    <Link to="/cart">
                        <i class="bi bi-cart"></i>
                        {/* 조건부 랜더링 */}
                        {cartItemCount > 0 && (
                            <span>{cartItemCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header