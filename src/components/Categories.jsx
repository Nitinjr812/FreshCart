import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from '../json/json/Products';
import './ProductDisplay.css';
import './Category.css';
import Navbar from './Navbar';

const Categories = () => {
  const [productsWithRatings, setProductsWithRatings] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('');
  const [filtered, setFiltered] = useState(false);

  useEffect(() => { 
    const updatedProducts = Products.map((product) => ({
      ...product,
      rating: parseFloat((Math.random() * (5 - 3) + 3).toFixed(1)),  
    }));
    setProductsWithRatings(updatedProducts);
 
    const uniqueCategories = [...new Set(Products.map((product) => product.category))];
    setCategories(uniqueCategories);
  }, []);

  const cart = (Cart) => {
    let cartItems = JSON.parse(localStorage.getItem("CartData")) || [];
    const isInCart = cartItems.some(item => item.id === Cart.id);

    if (isInCart) {
      toast.error('Item Already In Cart');
    } else {
      cartItems.push(Cart);
      localStorage.setItem("CartData", JSON.stringify(cartItems));
      toast.success('Item Added To Cart');
    }
  };

  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  const go = useNavigate();
  const ProductsDetail = (product) => {
    go('/ProductDetail', { state: product });
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setFiltered(true); // Trigger animation
    setTimeout(() => {
      const filteredProducts = Products.filter((product) =>
        product.tittle.toLowerCase().includes(searchQuery)
      );
      setProductsWithRatings(filteredProducts);
      setFiltered(false); // Reset animation state
    }, 300); // Animation duration
  };

  const filterByCategory = (category) => {
    setActiveCategory(category);
    setFiltered(true);  
    setTimeout(() => {
      if (category === '') {
        setProductsWithRatings(Products);
      } else {
        const filteredProducts = Products.filter((product) => product.category === category);
        setProductsWithRatings(filteredProducts);
      }
      setFiltered(false);  
    }, 300); 
  };

  return (
    <> 
    <Navbar/>
      <div className="search-container1">
        <input
          className="search-input"
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
        />
        <button className="search-btn">
          <i className="fas fa-search"></i> Search
        </button>
      </div>
 
      <div className="category-filter">
        <button
          className={`category-btn ${activeCategory === '' ? 'active' : ''}`}
          onClick={() => filterByCategory('')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
 
      <div className={`product-grid ${filtered ? 'fade-out' : 'fade-in'}`}>
        {productsWithRatings.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.tittle}
                className="product-image"
                onClick={() => ProductsDetail(product)}
              />
              <div className="hover-icons">
                <button
                  className="icon-button"
                  title="View Product"
                  onClick={() => openQuickView(product)}
                >
                  <i className="fas fa-eye"></i>
                </button>
                <button className="icon-button" title="Add to Wishlist">
                  <i className="fas fa-heart"></i>
                </button>
                <button
                  className="icon-button"
                  title="Add to Cart"
                  onClick={() => cart(product)}
                >
                  <i className="fas fa-cart-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3
                className="product-name"
                onClick={() => ProductsDetail(product)}
              >
                {product.tittle}
              </h3>
              <p className="category">{product.category}</p>
              <div className="price">
                <span className="current-price">₹{product.price}</span>
                <button
                  className="add-button ms-5"
                  onClick={() => cart(product)}
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="quick-view-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeQuickView}>
              ×
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.tittle}
              className="modal-image"
            />
            <div className="modal-details">
              <h2>{selectedProduct.tittle}</h2>
              <p id="description">{selectedProduct.description}</p>
              <p>{selectedProduct.category}</p>
              <p className="modal-price">₹{selectedProduct.price}</p>
              <button
                className="add-to-cart"
                onClick={() => cart(selectedProduct)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Categories;
