import React, { useState, useEffect } from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("CartData")) || []
    );

    useEffect(() => {
        localStorage.setItem("CartData", JSON.stringify(cartItems));
    }, [cartItems]);

    const incrementQuantity = (id) => {
        const updatedItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedItems);
    };

    const decrementQuantity = (id) => {
        const updatedItems = cartItems.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updatedItems);
    };

    const removeItem = (id) => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
        toast.info("Item removed from cart", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    
  let go=  useNavigate()

    let Checkout=(price)=>{
        go("/checkout",{
            state:price
        })
    }

    return (
        <div className="cart-container">
            <ToastContainer />
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <iframe src="https://lottie.host/embed/6bcdb569-900c-49fe-9fd0-60ece2fc6f07/BghYVZsp5B.lottie"></iframe>
                    <h4 className="empty-cart-message">Oops! Your cart is empty.</h4>
                    <div className="back-to-shop">
                        <Link to="/home">← Continue Shopping</Link>
                    </div>
                </div>
            ) : (
                <>
                    <div className="cart">
                        <h4 className="cart-title">
                            My <span className="span">Cart</span>
                        </h4>
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img
                                        className="item-image"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div className="item-info">
                                        <h6 className="item-name">{item.tittle}</h6>
                                        <p className="item-category">{item.category}</p>
                                        <div className="item-price">
                                            ₹{item.price * item.quantity}
                                        </div>
                                    </div>
                                    <div className="item-quantity">
                                        <button
                                            className="quantity-btn"
                                            onClick={() => decrementQuantity(item.id)}
                                        >
                                            -
                                        </button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button
                                            className="quantity-btn"
                                            onClick={() => incrementQuantity(item.id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className="remove-item"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        ✖
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="back-to-shop">
                            <Link to="/home">← Continue Shopping</Link>
                        </div>
                    </div>
                    <div className="summary">
                        <h5>Order Summary</h5>
                        <div className="summary-row">
                            <span>Items ({cartItems.length})</span>
                            <span>₹{totalPrice}</span>
                        </div>
                        <div className="total-price">
                            <span>Total</span>
                            <span>₹{totalPrice}</span>
                        </div>
                        <button className="checkout-btn" onClick={()=>Checkout(totalPrice)}>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
