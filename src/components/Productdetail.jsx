import React, { useEffect, useState } from 'react';
import './Productdetail.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from '../json/json/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Productdetail = () => {
  let location = useLocation();
  const [products, setproducts] = useState(location.state);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setproducts(location.state);
  }, [location.state]);

  const addToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem('CartData')) || [];
    const itemExists = cartItems.find((item) => item.id === products.id);

    if (itemExists) {
      toast.error('Item already in cart');
    } else {
      cartItems.push({ ...products, quantity });
      localStorage.setItem('CartData', JSON.stringify(cartItems));
      toast.success('Item added to cart');
    }
  };
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  let filter = Products.filter((item) => item.category === products.category && item.id !== products.id)


  return (
    <>
      <Navbar />
      <div className="breadcrumb-container text-success py-2 ps-2 ">
        <span>Home</span> / <span>{products.category}</span> / <span>{products.tittle}</span>
      </div>

      <div className="product-container-unique mx-auto p-4">
        <div className="product-grid-unique">
          <div className="image-section-unique">
            <img
              src={products.image}
              alt={products.tittle}
              className="product-image-unique"
            />
          </div>

          <div className="product-details-unique">
            <h2 className="product-title-unique">{products.tittle}</h2>
            <p className="description py-1">{products.description}</p>

            <div className="product-rating-unique">
              <span className="stars-unique">★★★★★</span>
              <span className="review-count-unique">({products.reviews} reviews)</span>
            </div>

            <div className="price-section-unique">
              <span className="current-price-unique">₹{products.price}</span>
            </div>

            <div className="size-selector-unique">
              <span className="size-label-unique">Select Size</span>
              <div className="size-options-unique">
                {products.sizes &&
                  products.sizes.map((size) => (
                    <button key={size} className="size-option-unique">
                      {size}
                    </button>
                  ))}
              </div>
            </div>

            <button className="add-to-cart-btn-unique" onClick={addToCart}>
              <span className="cart-text">Add to Cart</span>
              <span className="cart-icon">
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-center py-3 fw-bolder py-lg-4">Similar Products</h2>
      <div className="product-grid">
        {filter.map((product) => (
          <div key={product.id} className="product-card" >
            <div className="image-container">
              <img src={product.image} alt={product.tittle} className="product-image" onClick={() => { ProductsDetail(product) }} />
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
              <h3 className="product-name" onClick={() => { ProductsDetail(product) }}>{product.tittle}</h3>
              <p className="category">{product.category}</p>
              <div className="rating">
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
              <button className="add-to-cart" onClick={() => cart(selectedProduct)}>Add to Cart</button>
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

export default Productdetail;
