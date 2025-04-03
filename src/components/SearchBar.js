import React, { useState } from "react";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState(""); // ✅ 변수명 수정 (대문자 S → 소문자 s)

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // ✅ (오타 수정: perventDefault → preventDefault)
        onSearch(searchTerm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}> {/* ✅ (오타 수정: from → form) */}
                <input
                    type="text"
                    placeholder="상품 검색!"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit">검색</button>
            </form>
        </div>
    );
}

export default SearchBar;
