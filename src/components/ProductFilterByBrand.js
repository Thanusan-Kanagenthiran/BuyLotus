import React from "react";
import { useNavigate } from "react-router-dom";

const ProductFilterByBrand = ({
  productData,
  filterByBrand,
  setFilterByBrand,
}) => {
  const brands = [...new Set(productData.map((product) => product.brand))];
  const navigate = useNavigate();

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setFilterByBrand(selectedBrand);
    navigate(selectedBrand ? `/brand/${selectedBrand}` : "/");
  };

  return (
    <form className="d-flex">
      <select
        className="form-control form-control-sm me-3"
        value={filterByBrand || ""}
        onChange={(e) => handleBrandChange(e)}
      >
        <option value="">All Brands</option>
        {brands.map((brand) => (
          <option value={brand} key={brand}>
            {brand}
          </option>
        ))}
      </select>
    </form>
  );
};

export default ProductFilterByBrand;
