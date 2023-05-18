import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../SearchComponent";

const Navbar = ({ isLoggedIn, filterByBrandComponent, handleSearchChange }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-xl">
        <Link className="navbar-brand" to="/">
          <img src="/images/lotus.webp" alt="" />
          <span className="display-5 brand-name">
            <em>buy</em>Lotus
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/#about">
                <h5> About</h5>
              </Link>
            </li>

            {filterByBrandComponent && (
              <li className="nav-item">{filterByBrandComponent} </li>
            )}
          </ul>
          <div className="search-and-icons">
            <SearchComponent handleSearchChange={handleSearchChange} />
            <div className="p-1 d-flex mb-2">
              <div className="me-1">
                <Link to="/login">
                  <i className="bi bi-person-fill"></i>
                </Link>
              </div>
              <div className="me-1">
                <Link to={"/wishlist"}>
                  <i className="bi bi-heart-fill"></i>
                </Link>
              </div>
              <div className="cart">
                <Link to={"/cart"}>
                  <i className="bi bi-cart-fill"></i>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="
contact-info d-md-flex"
          >
            <p>+94772433010 | +94750735185 </p>
            <p>
              <a href="mailto:">thanushmk6@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
