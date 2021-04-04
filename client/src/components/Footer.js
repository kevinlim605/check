import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="site-footer pb-3 mt-5">
      <Container>
        <Row className="pt-4">
          <Col xs={{ size: 2 }}>
            <h6>GIFT CARDS</h6>
            <h6>PROMOTIONS</h6>
            <h6>FIND A STORE</h6>
            <h6>SIGN UP FOR EMAIL</h6>
            <h6>BECOME A MEMBER</h6>
            <h6>Check JOURNAL</h6>
            <h6>SEND US FEEDBACK</h6>
          </Col>
          <Col xs={2}>
            <h6>GET HELP</h6>
            <h6 className="sub-headers">Order Status</h6>
            <h6 className="sub-headers">Shipping and Delivery</h6>
            <h6 className="sub-headers">Returns</h6>
            <h6 className="sub-headers">Payment Options</h6>
            <h6 className="sub-headers">Gift Card Balance</h6>
            <h6 className="sub-headers">Contact Us</h6>
          </Col>
          <Col xs={2}>
            <h6>About Check</h6>
            <h6 className="sub-headers">News</h6>
            <h6 className="sub-headers">Careers</h6>
            <h6 className="sub-headers">Investors</h6>
            <h6 className="sub-headers">Purpose</h6>
            <h6 className="sub-headers">Sustainability</h6>
          </Col>
          <Col xs={{ size: 3, offset: 3 }} className="text-right">
            <i className="fa fa-twitter circle-icon"></i>
            <i className="fa fa-facebook circle-icon"></i>
            <i className="fa fa-youtube circle-icon"></i>
            <i className="fa fa-instagram circle-icon"></i>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <RoomIcon />{' '}
            <h6 className="bottom-headers d-inline">
              United States &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &copy; 2021
              Check, Inc. All Rights Reserved
            </h6>
          </Col>
          <Col className="ml-auto">
            {/* <h6 className="bottom-headers"></h6> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
