import React, { useEffect, useState } from 'react';
import Products from '../json/json/Products';
import './ProductDisplay.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from 'react-router-dom';

const getRandomRating = () => (Math.random() * (5 - 3) + 3).toFixed(1);

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <i key={`full-${index}`} className="fas fa-star" style={{ color: '#f39c12' }}></i>
      ))}
      {halfStar === 1 && <i className="fas fa-star-half-alt" style={{ color: '#f39c12' }}></i>}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={`empty-${index}`} className="far fa-star" style={{ color: '#f39c12' }}></i>
      ))}
    </>
  );
};

const ProductDisplay = () => {
  const [productsWithRatings, setProductsWithRatings] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const updatedProducts = Products.map((product) => ({
      ...product, 
      rating: parseFloat(getRandomRating()),
    }));
    setProductsWithRatings(updatedProducts);
  }, []);

  const cart = (Cart) => {
    let Products = JSON.parse(localStorage.getItem("CartData")) || [];
    let filter = Products.filter(item => Cart.id === item.id);

    if (filter[0]) {
      toast.error('Item Already In Cart');
    } else {
      Products.push(Cart);
      localStorage.setItem("CartData", JSON.stringify(Products));
      toast.success('Item Added To Cart');
    }
  };

  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };
  let go = useNavigate()
  const ProductsDetail = (products) => {
    go('/ProductDetail', { state: products })
  }

  return (
    <>
      <h3 className='heading'>Popular Products</h3>
      <div className="product-grid">
        {productsWithRatings.map((product) => (
          <div key={product.id} className="product-card" >
            <div className="image-container">
              <img src={product.image} alt={product.tittle} className="product-image" onClick={()=>{ProductsDetail(product)}} />
              <div className="hover-icons">
                <button className="icon-button" title="View Product" onClick={() => openQuickView(product)}>
                  <i className="fas fa-eye"></i>
                </button>
                <button className="icon-button" title="Add to Wishlist">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="icon-button" title="Add to Cart" onClick={() => cart(product)}>
                  <i className="fas fa-cart-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name" onClick={()=>{ProductsDetail(product)}}>{product.tittle}</h3>
              <p className="category">{product.category}</p>
              <div className="rating">
                {renderStars(product.rating)} <span>({product.rating})</span>
              </div>
              <div className="price">
                <span className="current-price">₹{product.price}</span>
                <button className="add-button ms-5" onClick={() => cart(product)}>+ Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="quick-view-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeQuickView}>×</button>
            <img src={selectedProduct.image} alt={selectedProduct.tittle} className="modal-image" />
            <div className="modal-details">
              <h2>{selectedProduct.tittle}</h2>
              <p id='description'>{selectedProduct.description}</p>
              <p>{selectedProduct.category}</p>
              <p className="modal-price">₹{selectedProduct.price}</p>
              <div className="rating">
                {renderStars(selectedProduct.rating)} <span>({selectedProduct.rating})</span>
              </div>
              <button className="add-to-cart" onClick={() => cart(selectedProduct)}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ProductDisplay;
