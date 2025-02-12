import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products1.css"
const Products = () => {
  const categories = [
    { image: "path_to_tea_image.jpg", label: "Tea, Coffee & Drinks" },
    { image: "path_to_atta_image.jpg", label: "Atta, Rice & Dal" },
    { image: "path_to_baby_image.jpg", label: "Baby Care" },
    { image: "path_to_meat_image.jpg", label: "Chicken, Meat & Fish" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }
  return (
    <> 
        <div className="slider-container">
      <h2>Featured Categories</h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.image} alt={category.label} />
            <p>{category.label}</p>
          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}

export default Products
