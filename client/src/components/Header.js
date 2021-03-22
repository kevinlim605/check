import React from 'react';
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

import { Link } from 'react-router-dom';

import styles from '../assets/jss/material-kit-react/views/componentsSections/navbarsStyle';
const useStyles = makeStyles(styles);

const MyHeader = () => {
  const classes = useStyles();

  return (
    <header className="mb-5">
      <Header
        className="test"
        leftLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Link to="/">
                <img
                  src="/images/nikelogo.svg"
                  width="65"
                  alt="nike logo"
                  className="logo"
                />
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="/products">
                <Button
                  className={classes.navLink}
                  id="navMen"
                  color="transparent"
                >
                  Men
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button className={classes.navLink} color="transparent">
                Women
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button className={classes.navLink} color="transparent">
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
    </header>
  );
};

export default MyHeader;
