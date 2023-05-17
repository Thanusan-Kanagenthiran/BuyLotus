import React from "react";

const ProductFilterByCategory = ({
  productData,
  filterByCategory,
  setFilterByCategory,
}) => {
  const categories = [
    ...new Set(productData.map((product) => product.category)),
  ];

  return (
    <>
      <ul className="list-unstyled">
        <button
          type="button"
          className="btn btn-link"
          onClick={() => setFilterByCategory("")}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <li key={category}>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => setFilterByCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductFilterByCategory;
