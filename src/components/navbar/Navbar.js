import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../SearchComponent";

const Navbar = ({
  isLoggedIn,
  handleLogout,
  filterByBrandComponent,
  handleSearchChange,
}) => {
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-xl">
        <Link className="navbar-brand" to="/">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt=""
          />
          <span className="brand-name">buyLotus</span>
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
                About
              </Link>
            </li>

            {filterByBrandComponent && (
              <li className="nav-item">{filterByBrandComponent} </li>
            )}
          </ul>
          <div className="search-and-icons">
            <SearchComponent handleSearchChange={handleSearchChange} />
            <div className="user-icons d-flex mb-2">
              <div className="profile">
                {isLoggedIn ? (
                  <Link to="/profile">
                    <i className="bi bi-person"></i>
                  </Link>
                ) : (
                  <Link to="/login">
                    <i className="bi bi-person"></i>
                  </Link>
                )}
              </div>
              <div className="wishlist">
                <Link to={isLoggedIn ? "/wishlist" : "/login"}>
                  <i className="bi bi-heart"></i>
                </Link>
              </div>
              <div className="cart">
                <Link to={isLoggedIn ? "/cart" : "/login"}>
                  <i className="bi bi-cart"></i>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="
contact-info d-md-flex"
          >
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
