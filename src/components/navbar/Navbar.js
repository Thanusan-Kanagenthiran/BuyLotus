import React from "react";
import SearchComponent from "../SearchComponent";

const Navbar = ({ filterByBrandComponent, handleSearchChange }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-xl">
        <a className="navbar-brand" href="/">
          <img src="/images/img1.jpg" alt="" />
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {filterByBrandComponent && (
              <li className="nav-item">{filterByBrandComponent}</li>
            )}
          </ul>
          <div className="search-and-icons">
            <SearchComponent handleSearchChange={handleSearchChange} />
            <div className="user-icons d-flex mb-2">
              <div className="profile">
                <i className="bi bi-person"></i>
              </div>
              <div className="wishlist">
                <i className="bi bi-heart"></i>
              </div>
              <div className="cart">
                <i className="bi bi-cart3"></i>
              </div>
            </div>
          </div>

          <div className="contact-info d-md-flex">
            <p>+0987654321 | +1234567890 </p>
            <p>
              <a href="mailto:">contact@domainname.com</a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
