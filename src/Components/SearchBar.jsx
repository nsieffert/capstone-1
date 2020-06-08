import React from "react";

function SearchBar() {
  return (
    <div>
      <button className="searchButton">Search</button>
      <input
        className="search"
        type="text"
        placeholder="Search by product name..."
      />
    </div>
  );
}

export default SearchBar;
