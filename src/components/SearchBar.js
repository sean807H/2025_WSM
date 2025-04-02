import React, {useState} from "react"

function SearchBar({onSearch}) {
    const [searchTerm, SetSearchTerm] = useState("")

    const handleChange = (e) => {
        SetSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.perventDefault()
        onSearch(searchTerm)
    }

    return (
        <div>
            <from onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="상품 검색!"
                    value={searchTerm}
                    onChange={handleChange} 
                />
                <button type="submit">
                    <span>검색</span>
                </button>
            </from>
        </div>
    )
}

export default SearchBar