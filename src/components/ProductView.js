import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const ProductView = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/products/" + productid)
      .then((res) => res.json())
      .then((resp) => {
        setProduct(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productid]);

  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                <div className="main_image">
                  <img
                    src={"http://localhost:8000/" + product.image}
                    className="h-100 img-fluid pt-3 rounded"
                    alt={product.name}
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{product.name}</h3>
                  <div className="btn btn-danger rounded-circle">
                    <i className="bi bi-heart"></i>
                  </div>
                </div>
                <div className="mt-2 pr-3 content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
                <h3>Rs. {product.price} /=</h3>
                <div className="ratings d-flex flex-row align-items-center">
                  <div className="d-flex flex-row">
                    <i className="bi bis-star"></i>
                    <i className="bi bis-star"></i>
                    <i className="bi bis-star"></i>
                    <i className="bi bis-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <span>441 reviews</span>
                </div>
                <div className="mt-5">
                  <span className="fw-bold">Color</span>
                  <div className="colors">
                    <ul id="marker">
                      <li id="marker-1"></li>
                      <li id="marker-2"></li>
                      <li id="marker-3"></li>
                      <li id="marker-4"></li>
                      <li id="marker-5"></li>
                    </ul>
                  </div>
                </div>
                <div className="buttons d-flex flex-row mt-5 gap-3">
                  <button className="btn btn-outline-dark">Buy Now</button>
                  <button className="btn btn-dark">Add to Basket</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
