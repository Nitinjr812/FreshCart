import React from 'react';
import Footer from './Footer';
import './Home1.css';
import Navbar from './Navbar';
import Slider from './Slider';
import Slider2 from './Slider2';
import ProductDisplay from './ProductDisplay';

const Home = () => {

    return (
        <>
            <Navbar />
            <Slider />
            <ProductDisplay />
            <Slider2 />
            <Footer />
        </>
    );
}

export default Home;
