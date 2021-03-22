import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// material-ui components
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn';
// core components
import GridContainer from './material-kit-react/Grid/GridContainer.js';
import GridItem from './material-kit-react/Grid/GridItem.js';
import Card from './material-kit-react/Card/Card.js';

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
    // <GridContainer>
    //   <GridItem xs={12} sm={12} md={8}>
    //     <Card>
    <Carousel {...settings}>
      {images.map((image) => (
        <div>
          <img src={image} alt="First slide" className="slick-image" />
        </div>
      ))}
    </Carousel>
    //     </Card>
    //   </GridItem>
    // </GridContainer>
  );
};

export default ProductCarousel;
