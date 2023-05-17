import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductView from "./components/ProductView";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/brand/:brand" element={<ProductList />} />
          <Route path="/product/view/:productid" element={<ProductView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
