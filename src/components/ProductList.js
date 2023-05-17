import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import NoProductsFound from "./NoProductsFound";
import ProductFilterByBrand from "./ProductFilterByBrand";
import ProductFilterByCategory from "./ProductFilterByCategory";
import PriceRangeFilter from "./PriceRangeFilter";
import Navbar from "./navbar/Navbar";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [filterByBrand, setFilterByBrand] = useState(null);
  const [filterByCategory, setFilterByCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const { brand } = useParams();

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    setFilterByBrand(brand || null);
    setFilterByCategory(null);
  }, [brand]);

  const fetchProductData = async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filterProducts = (product) => {
    const productBrandMatches =
      !filterByBrand || product.brand === filterByBrand;
    const productCategoryMatches =
      !filterByCategory || product.category === filterByCategory;
    const productName = product.name || "";
    const productDescription = product.description || "";
    const productMatchesSearchTerm =
      productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      productDescription.toLowerCase().includes(searchTerm.toLowerCase());

    const productPrice = product.price || 0;

    const priceInRange =
      (!minPrice || productPrice >= minPrice) &&
      (!maxPrice || productPrice <= maxPrice);

    return (
      productBrandMatches &&
      productCategoryMatches &&
      productMatchesSearchTerm &&
      priceInRange
    );
  };

  const filteredProductData = productData.filter(filterProducts);

  const renderProductCard = () => {
    if (filteredProductData.length > 0) {
      return <ProductCard productData={filteredProductData} />;
    }
    return <NoProductsFound />;
  };

  return (
    <div>
      <Navbar
        handleSearchChange={handleSearchChange}
        isLoggedIn={false}
        filterByBrandComponent={
          <ProductFilterByBrand
            productData={productData}
            setFilterByBrand={setFilterByBrand}
            filterByBrand={filterByBrand}
          />
        }
      />

      <div className="row">
        {filterByBrand && (
          <div className="col-2">
            <div className="mb-2">
              <PriceRangeFilter
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleMinPriceChange={handleMinPriceChange}
                handleMaxPriceChange={handleMaxPriceChange}
              />
            </div>
            <ProductFilterByCategory
              productData={productData}
              setFilterByCategory={setFilterByCategory}
              filterByCategory={filterByCategory}
            />
          </div>
        )}

        <div className="col px-3">
          <div className="row">{renderProductCard()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
