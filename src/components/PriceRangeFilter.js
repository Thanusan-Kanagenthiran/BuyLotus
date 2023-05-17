import React from "react";

const PriceRangeFilter = ({
  minPrice,
  maxPrice,
  handleMinPriceChange,
  handleMaxPriceChange,
}) => {
  return (
    <div className="row">
      <div className="col">
        <label className="form-label">Min Price:</label>
        <input
          type="number"
          className="form-control"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
      </div>
      <div className="col">
        <label className="form-label">Max Price:</label>
        <input
          type="number"
          className="form-control"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
