import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import products from '../shared/products';
import { Image } from 'react-bootstrap';

const ProductListing = () => {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Link to="/products/product">Click to see Product</Link>
          <h3>Mens</h3>
          <div>
            <h4>Shoes</h4>
            <p>Lifestyle</p>
            <p>Running</p>
            <p>Basketball</p>
            <p>Soccer</p>
            <p>Skateboarding</p>
            <p>Tennis</p>
            <br />
            <h4>Clothing</h4>
            <p>Tops</p>
            <p>Shorts</p>
            <p>Hoodies/Sweatshirts</p>
            <p>Pants</p>
            <p>Jackets</p>
            <br />
            <h4>Accessories</h4>
            <p>Bags/Backpacks</p>
            <p>Hats/Visors/Sweatbands</p>
          </div>
        </Col>
        <Col xs={9}>
          <Row>
            {products.map((product) => (
              <Col xs={4}>
                <div>
                  <Image fluid src={product.options[0].images[0]} />
                  <h5>
                    <b>{product.name}</b> <br />
                    {product.genderOrDemographic}'s {product.type} <br />
                    {product.options.length} colors
                    <br />${product.price}
                  </h5>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListing;
