import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Subnav = () => {
  return (
    <Container className="NavDropdown pt-4 pb-4 mb-4" fluid>
      <Row className="ml-4">
        <Col xs={{ size: 2, offset: 1 }}>
          <h4>Shoes</h4>
          <p>Lifestyle</p>
          <p>Running</p>
          <p>Basketball</p>
          <p>Soccer</p>
          <p>Skateboarding</p>
          <p>Tennis</p>
        </Col>
        <Col xs={2} md={2}>
          <h4>Clothing</h4>
          <p>Tops</p>
          <p>Shorts</p>
          <p>Hoodies/Sweatshirts</p>
          <p>Pants</p>
          <p>Jackets</p>
        </Col>
        <Col xs={2} md={2}>
          <h4>Accessories</h4>
          <p>Bags/Backpacks</p>
          <p>Hats/Visors/Sweatbands</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Subnav;
