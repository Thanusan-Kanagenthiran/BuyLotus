import React from "react";

const SearchComponent = ({ handleSearchChange }) => {
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here
  };

  return (
    <form className="d-flex mb-2 me-2" role="search" onSubmit={handleSearchSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(event) => handleSearchChange(event.target.value)}
      />
    </form>
  );
};

export default SearchComponent;
