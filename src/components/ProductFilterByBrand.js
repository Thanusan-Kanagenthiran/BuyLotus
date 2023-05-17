import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductFilterByBrand = ({
  productData,
  filterByBrand,
  setFilterByBrand,
}) => {
  const [brandData, setBrandData] = useState([]);
  const brands = [...new Set(productData.map((product) => product.brand))];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        const response = await fetch("http://localhost:8000/brands");
        const data = await response.json();
        setBrandData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching brand data:", error);
      }
    };

    fetchBrandData();
  }, []);

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setFilterByBrand(selectedBrand);
    navigate(selectedBrand ? `/brand/${selectedBrand}` : "/");
  };

  const getBrandImageUrl = (brandName) => {
    const brand = brandData.find((item) => item.brand === brandName);
    return brand ? brand.imageUrl : "";
  };

  return (
    <form className="d-flex">
      <select
        className="form-control form-control-sm me-3 nav-link"
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
      {filterByBrand && (
        <div>
          <p>Selected Brand: {filterByBrand}</p>
          <img
            src={getBrandImageUrl(filterByBrand)}
            alt={filterByBrand}
            style={{ width: "50px", height: "50px", margin: "0 5px" }}
          />
        </div>
      )}
    </form>
  );
};

export default ProductFilterByBrand;
