import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Button from '../components/material-kit-react/CustomButtons/Button';

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
      <Row className="mt-5 text-align-center">
        <Col xs={12}>
          <Image src="/images/motto.png" alt="motto" fluid />
        </Col>
        <Col xs={12} className="text-center">
          <Button color="dark" round>
            <b>Join Us</b>
          </Button>
          <Button color="dark" round>
            <b>Sign In</b>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
