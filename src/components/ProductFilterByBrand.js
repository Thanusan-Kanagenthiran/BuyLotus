import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const ProductFilterByBrand = ({ filterByBrand, setFilterByBrand }) => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await fetch("http://localhost:8000/brands");
      const data = await response.json();
      setBrands(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBrandClick = (selectedBrand) => {
    setFilterByBrand(selectedBrand);
    navigate(selectedBrand ? `/brand/${selectedBrand}` : "/");
  };

  return (
    <div className="dropdown nav-item">
      <Link
        className="nav-link active"
        to="#"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <h5>Brands</h5>
      </Link>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownMenuButton"
      >
        <li>
          <div className="border" style={{ display: "flex", flexWrap: "wrap" }}>
            {brands.map((brand) => (
              <div
                key={brand.id}
                style={{ width: "33%", padding: "10px" }}
                onClick={() => handleBrandClick(brand.brand)}
              >
                <img
                  src={brand.image}
                  alt={brand.brand}
                  style={{ width: "120px" }}
                />
              </div>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductFilterByBrand;
