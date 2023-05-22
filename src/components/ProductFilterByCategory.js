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
      <h5 className="text-center">
        <strong>Categories</strong>
      </h5>
      <ul class="list-group ms-2">
        <li
          className="btn btn-sm list-group-item mb-2 text-start"
          onClick={() => setFilterByCategory("")}
        >
          All Categories
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className="btn btn-sm list-group-item mb-2 text-start"
            onClick={() => setFilterByCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductFilterByCategory;
