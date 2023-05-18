import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductView from "./components/ProductView";
import ProfilePage from "./components/ProfilePage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/brand/:brand" element={<ProductList />} />
        <Route path="/category/:category" element={<ProductList />} />
        <Route path="/product/view/:productid" element={<ProductView />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
