import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import products from '../shared/products';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../components/material-kit-react/Card/Card';
import CardBody from '../components/material-kit-react/Card/CardBody';
import imagesStyles from '../assets/jss/material-kit-react/imagesStyles.js';
import { cardTitle } from '../assets/jss/material-kit-react.js';
import { Image } from 'react-bootstrap';

const styles = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: '#6c757d',
  },
};

const useStyles = makeStyles(styles);

const ProductListing = () => {
  const classes = useStyles();
  return (
    <>
      <Link to="/products/product">Click to see Product</Link>
      <Container>
        <Row>
          <Col xs={3}>
            <div>Hello</div>
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
    </>
  );
};

export default ProductListing;
