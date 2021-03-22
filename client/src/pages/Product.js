import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Image } from 'react-bootstrap';
import ProductCarousel from '../components/Carousel';
import products from '../shared/products';
import Button from '../components/material-kit-react/CustomButtons/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Product = () => {
  const shoe = products[0];

  const [option, setOption] = useState(shoe.options[0]);

  return (
    <Container>
      <Row>
        <Col xl={7}>
          <ProductCarousel images={option.images} />
        </Col>
        <Col xl={5}>
          <h4>
            <b>
              {shoe.genderOrDemographic}'s {shoe.category} {shoe.type}
            </b>
          </h4>
          <h2>
            <b>{shoe.name}</b>
          </h2>
          {shoe.options.map((option) => (
            <Image
              src={option.images[0]}
              width="70"
              height="70"
              rounded
              className="mr-2"
              onClick={() =>
                setOption(shoe.options[shoe.options.indexOf(option)])
              }
            />
          ))}
          <div className="mt-4">
            <hr />
            <h4>
              <b>Select Size</b>
            </h4>
            {option.stock.map((item) => (
              <Button>Size: {item.size}</Button>
            ))}
            <div className="mt-4">
              <Button round color="dark">
                Add To Bag
              </Button>
              <Button round color="white">
                Favorite <FavoriteBorderIcon className="ml-1" />
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <hr />
            <p>
              <b>Description: </b> {shoe.description}
            </p>
          </div>
          <div className="mt-4">
            <hr />
            <h3>
              <b>See Reviews</b>
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
