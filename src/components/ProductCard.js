import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/view/${id}`);
  };

  const handleAddToCart = (id) => {
    // Logic for adding product to cart
  };

  const handleAddToWishlist = (id) => {
    // Logic for adding product to wishlist
  };

  const handleProductView = (id) => {
    navigate(`/product/view/${id}`);
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="text-center container py-5">
        <div className="row">
          {productData.map((product) => (
            <div className="col-lg-3 col-md-4 col-6 mb-4" key={product.id}>
              <div className="card h-100">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={product.image}
                    className="h-100 img-fluid"
                    alt={product.name}
                    style={{ maxHeight: "150px", objectFit: "cover" }}
                  />
                  <div className="d-flex justify-content-center align-items-center p-3">
                    <a
                      className="btn btn-link btn-floating btn-lg text-dark m-1"
                      href="#!"
                      role="button"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="bi bi-heart-fill"></i>
                    </a>

                    <a
                      className="btn btn-link btn-floating btn-lg text-dark m-1"
                      href="#!"
                      role="button"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="bi bi-cart-fill"></i>
                    </a>

                    <a
                      className="btn btn-link btn-floating btn-lg text-dark m-1"
                      href="#!"
                      role="button"
                      data-mdb-ripple-color="dark"
                      onClick={() => handleProductView(product.id)}
                    >
                      <i className="bi bi-eye-fill"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <a href="/" className="text-reset">
                    <h5
                      onClick={() => handleProductClick(product.id)}
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
