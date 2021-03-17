import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// core components
import Header from './material-kit-react/Header/Header';
import Button from './material-kit-react/CustomButtons/Button';
// react bootstrap
import { Container, Row, Col } from 'reactstrap';

import styles from '../assets/jss/material-kit-react/views/componentsSections/navbarsStyle';
const useStyles = makeStyles(styles);

const MyHeader = () => {
  const [menNavDropdown, setMenNavDropdown] = useState(false);
  const [womenNavDropdown, setWomenNavDropdown] = useState(false);
  const [kidsNavDropdown, setKidsNavDropdown] = useState(false);

  const showMenNavDropdown = () => {
    setMenNavDropdown(!menNavDropdown);
    setWomenNavDropdown(false);
    setKidsNavDropdown(false);
  };

  const showWomenNavDropdown = () => {
    setWomenNavDropdown(!womenNavDropdown);
    setMenNavDropdown(false);
    setKidsNavDropdown(false);
  };

  const showKidsNavDropdown = () => {
    setKidsNavDropdown(!kidsNavDropdown);
    setMenNavDropdown(false);
    setWomenNavDropdown(false);
  };

  const classes = useStyles();

  return (
    <header>
      <Header
        leftLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <img
                src="/images/nikelogo.svg"
                width="65"
                alt="nike logo"
                className="logo"
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={classes.navLink}
                onClick={showMenNavDropdown}
                color="transparent"
              >
                Men
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={classes.navLink}
                onClick={showWomenNavDropdown}
                color="transparent"
              >
                Women
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={classes.navLink}
                onClick={showKidsNavDropdown}
                color="transparent"
              >
                Kids
              </Button>
            </ListItem>
          </List>
        }
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                <ShoppingCartIcon /> Cart
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                <AccountCircleIcon /> Sign In
              </Button>
            </ListItem>
          </List>
        }
      />
      {menNavDropdown && (
        <Container
          className="navDropdown pt-4 pb-4 mb-4"
          fluid
          // style={{ backgroundColor: '#E5E5E5' }}
        >
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
      )}
      {womenNavDropdown && (
        <Container className="navDropdown pt-4 pb-4 mb-4" fluid>
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
      )}
      {kidsNavDropdown && (
        <Container className="navDropdown pt-4 pb-4 mb-4" fluid>
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
      )}
    </header>
  );
};

export default MyHeader;
