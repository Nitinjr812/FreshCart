import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.column}>
                    <h6 className={styles.heading}>Categories</h6>
                    <ul className={styles.list}>
                        <li><a href="#" className={styles.a}>Vegetables # Fruits</a></li>
                        <li><a href="#" className={styles.a}>Breakfast # instant food</a></li>
                        <li><a href="#" className={styles.a}>Bakery # Biscuits</a></li>
                        <li><a href="#" className={styles.a}>Atta, rice # dal</a></li>
                        <li><a href="#" className={styles.a}>Sauces # spreads</a></li>
                        <li><a href="#" className={styles.a}>Organic # gourmet</a></li>
                        <li><a href="#" className={styles.a}>Baby care</a></li>
                        <li><a href="#" className={styles.a}>Cleaning essentials</a></li>
                        <li><a href="#" className={styles.a}>Personal care</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h6 className={styles.heading}>Get to know us</h6>
                    <ul className={styles.list}>
                        <li><a href="#" className={styles.a}>Company</a></li>
                        <li><a href="#" className={styles.a}>About</a></li>
                        <li><a href="#" className={styles.a}>Blog</a></li>
                        <li><a href="#" className={styles.a}>Help Center</a></li>
                        <li><a href="#" className={styles.a}>Our Value</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h6 className={styles.heading}>For Consumers</h6>
                    <ul className={styles.list}>
                        <li><a href="#" className={styles.a}>Payments</a></li>
                        <li><a href="#" className={styles.a}>Shipping</a></li>
                        <li><a href="#" className={styles.a}>Product Returns</a></li>
                        <li><a href="#" className={styles.a}>FAQ</a></li>
                        <li><a href="#" className={styles.a}>Shop Checkout</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h6 className={styles.heading}>Become a Shopper</h6>
                    <ul className={styles.list}>
                        <li><a href="#" className={styles.a}>Shopper Opportunities</a></li>
                        <li><a href="#" className={styles.a}>Become a Shopper</a></li>
                        <li><a href="#" className={styles.a}>Earnings</a></li>
                        <li><a href="#" className={styles.a}>Ideas # Guides</a></li>
                        <li><a href="#" className={styles.a}>New Retailers</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h6 className={styles.heading}>Freshcart programs</h6>
                    <ul className={styles.list}>
                        <li><a href="#" className={styles.a}>Freshcart programs</a></li>
                        <li><a href="#" className={styles.a}>Gift Cards</a></li>
                        <li><a href="#" className={styles.a}>Promos # Coupons</a></li>
                        <li><a href="#" className={styles.a}>Freshcart Ads</a></li>
                        <li><a href="#" className={styles.a}>Careers</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.paymentPartners}>
                <p>Payment Partners</p>
                <img src="amazon.svg" alt="Amazon Pay" />
                <img src="mastercard.svg" alt="Mastercard" />
                <img src="paypal.svg" alt="PayPal" />
                <img src="visa.svg" alt="Visa" />
            </div>
            <div className={styles.downloadSection}>
                <p>Get deliveries with FreshCart</p>
                <img src="app-store.svgr.svg" alt="App Store" />
                <img src="playstore.svg" alt="Google Play" />
            </div>
        </footer>
    );
};

export default Footer;
