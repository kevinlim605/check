import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Image src="/images/airmax.png" alt="air max" fluid />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Image src="/images/airmaxmen.png" alt="air max men" fluid />
        </Col>
        <Col>
          <Image src="/images/airmaxwomen.png" alt="air max women" fluid />
        </Col>
        <Col>
          <Image src="/images/airmaxkids.png" alt="air max kids" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
