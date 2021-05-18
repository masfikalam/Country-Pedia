import React from "react";

const SearchBox = ({ setTerm }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search country"
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
