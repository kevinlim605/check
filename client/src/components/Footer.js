import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="site-footer mt-5">
      <Container>
        <Row className="pt-4">
          <Col xs={{ size: 2, offset: 1 }}>
            <h6>GIFT CARDS</h6>
            <h6>PROMOTIONS</h6>
            <h6>FIND A STORE</h6>
            <h6>SIGN UP FOR EMAIL</h6>
            <h6>BECOME A MEMBER</h6>
            <h6>NIKE JOURNAL</h6>
            <h6>SEND US FEEDBACK</h6>
          </Col>
          <Col xs={2}>
            <h6>GET HELP</h6>
            <p>Order Status</p>
            <p>Shipping and Delivery</p>
            <p>Returns</p>
            <p>Payment Options</p>
            <p>Gift Card Balance</p>
            <p>Contact Us</p>
          </Col>
          <Col xs={2}>
            <h6>About Nike</h6>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Purpose</p>
            <p>Sustainability</p>
          </Col>
          <Col xs={{ size: 3, offset: 1 }} className="text-right">
            <i className="fa fa-twitter circle-icon"></i>
            <i className="fa fa-facebook circle-icon"></i>
            <i className="fa fa-youtube circle-icon"></i>
            <i className="fa fa-instagram circle-icon"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
