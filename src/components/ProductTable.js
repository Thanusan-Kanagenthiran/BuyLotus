import React from "react";
import { useNavigate } from "react-router-dom";

const ProductTable = ({ productData }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate("/product/view/" + id);
  };

  return (
    <>
      {productData.map((product) => (
        <di key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.brand}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>
            <button
              className="btn btn-sm rounded-circle me-2 text-success"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="bi bi-eye-fill"></div>
            </button>
          </td>
        </di>
      ))}
    </>
  );
};

export default ProductTable;
