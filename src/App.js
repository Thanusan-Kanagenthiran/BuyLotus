import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductView from "./components/ProductView";
import ProfilePage from "./components/ProfilePage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/brand/:brand" element={<ProductList />} />
        <Route path="/product/view/:productid" element={<ProductView />} />
        <Route
          path="/profile"
          element={<ProfilePage handleLogout={handleLogout} />}
        />
        <Route
          path="/login"
          element={<LoginPage handleLogin={handleLogin} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
