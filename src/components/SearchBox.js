import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
            className="searchBox pa3 bn"
            type="search" 
            placeholder="search spacemen"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;