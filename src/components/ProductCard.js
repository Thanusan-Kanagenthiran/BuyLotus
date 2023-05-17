import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/view/${id}`);
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="text-center container py-5">
        <div className="row">
          {productData.map((product) => (
            <div className="col-lg-3 col-md-4 col-6 mb-4" key={product.id}>
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={product.image}
                    className="w-100"
                    alt={product.name}
                  />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          {product.isNew && (
                            <span className="badge bg-primary ms-2">New</span>
                          )}
                          {product.isEco && (
                            <span className="badge bg-success ms-2">Eco</span>
                          )}
                          {product.discount && (
                            <span className="badge bg-danger ms-2">
                              -{product.discount}%
                            </span>
                          )}
                          <a href={`/product/view/${product.id}`}>
                            <i className="bi bi-0-circle-fill"></i>
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="/" className="text-reset">
                    <h5
                      onClick={handleProductClick}
                      className="card-title mb-3"
                    >
                      {product.name}
                    </h5>
                  </a>
                  <a href="/" className="text-reset">
                    <p>{product.brand}</p>
                  </a>
                  {product.discount ? (
                    <h6 className="mb-3">
                      <s>${product.price}</s>
                      <strong className="ms-2 text-danger">
                        $
                        {(
                          (product.price * (100 - product.discount)) /
                          100
                        ).toFixed(2)}
                      </strong>
                    </h6>
                  ) : (
                    <h6 className="mb-3">${product.price}</h6>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
