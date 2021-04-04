import React from 'react';
import Carousel from 'react-slick';

const ProductCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      {images.map((image) => (
        <div>
          <img src={image} alt="First slide" className="slick-image" />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
