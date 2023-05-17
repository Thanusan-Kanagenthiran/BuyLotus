import React, { useEffect, useState } from "react";

const BrandsList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/brands")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div>
      <h1>Brands List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {brands.map((brand) => (
          <div key={brand.id} style={{ width: "33%", padding: "10px" }}>
            <img
              src={brand.image}
              alt={brand.brand}
              style={{ width: "150px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsList;
