import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import {
    FaHome,
    FaSearch,
    FaShoppingBag,
    FaHeart,
    FaSignOutAlt,
    FaTimes,
    FaBars,
} from 'react-icons/fa';

const Navbar = () => {

    let navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("logged");
        navigate('/');
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    let userlogin = JSON.parse(localStorage.getItem("currentuser"))

    return (
        <>
            <header className="navbar1">
                <div className="navbar-left">
                    <img src="./freshcart.svg" alt="Logo" className="logo" />
                </div>

                <div className="hamburger" onClick={toggleSidebar}>
                    <FaBars className={`icon ${isSidebarOpen ? 'hide' : ''}`} />
                    <FaTimes className={`icon ${isSidebarOpen ? 'show' : 'hide'}`} />
                </div>

                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-header">
                        <h3 className="Hel">
                            Hi <span className="Username">{userlogin.name}</span>,
                        </h3>

                    </div>
                    <div className="search-container">
                    </div>
                    <ul className="sidebar-menu">
                        <Link className=' text-decoration-none text-black' to="/category"> <li> <FaSearch className='icon' />Search</li>  </Link>
                        <Link to='/home' className='text-decoration-none text-black'> <li><FaHome className="icon" /> Home</li></Link>
                        <li><FaShoppingBag className="icon" /> <Link className='text-decoration-none text-black' to="/Cart">  Orders</Link></li>
                        <li><FaHeart className="icon" /> Wishlist</li>
                        <button onClick={logout} id="li" className="logout-button">
                            <FaSignOutAlt className="icon" /> Logout
                        </button>
                    </ul>
                </div>
            </header >

            <nav className="lower-navbar">
                <div className="all-departments">
                    <button className="all-departments-button">
                        <span className="icon-grid"></span> All Departments
                    </button>
                </div>
                <ul className="lower-navbar-menu">
                    <li>Home</li>
                    <li className="dropdown">
                        Shop
                        <ul className="dropdown-menu">
                            <li>Shop Grid - Filter</li>
                            <li>Shop Grid - 3 Column</li>
                            <li>Shop List - Filter</li>
                            <li>Shop - Filter</li>
                            <li>Shop Wide</li>
                            <li>Shop Single</li>
                            <li>Shop Wishlist</li>
                            <li>Shop Cart</li>
                            <li>Shop Checkout</li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        Stores
                        <ul className="dropdown-menu">
                            <li>Store 1</li>
                            <li>Store 2</li>
                            <li>Store 3</li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        Mega Menu
                        <ul className="dropdown-menu">
                            <li>Mega Item 1</li>
                            <li>Mega Item 2</li>
                            <li>Mega Item 3</li>
                        </ul>
                    </li>
                    <li>Pages</li>
                    <li>Account</li>
                    <li>Dashboard</li>
                    <li>Docs</li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
