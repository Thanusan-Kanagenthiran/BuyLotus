import React from "react";

const PriceRangeFilter = ({
  minPrice,
  maxPrice,
  handleMinPriceChange,
  handleMaxPriceChange,
}) => {
  return (
    <div className="row text-center py-4 ps-2 mt-3 ms-1">
      <h5>
        <strong>Price Range</strong>
      </h5>
      <div className="col">
        <label className="form-label">Min Price:</label>
        <input
          type="number"
          className="form-control form-control-sm"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
      </div>
      <div className="col">
        <label className="form-label">Max Price:</label>
        <input
          type="number"
          className="form-control form-control-sm"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
