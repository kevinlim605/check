import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import People from '@material-ui/icons/People';
import Email from '@material-ui/icons/Email';
// core components
import GridContainer from '../components/material-kit-react/Grid/GridContainer';
import GridItem from '../components/material-kit-react/Grid/GridItem';
import Card from '../components/material-kit-react/Card/Card';
import CardHeader from '../components/material-kit-react/Card/CardHeader';
import CardBody from '../components/material-kit-react/Card/CardBody';
import CardFooter from '../components/material-kit-react/Card/CardFooter';
import Button from '../components/material-kit-react/CustomButtons/Button';
import CustomInput from '../components/material-kit-react/CustomInput/CustomInput';

import styles from '../assets/jss/material-kit-react/views/componentsSections/loginStyle';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

const Login = () => {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <form className={classes.form}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h4>Login</h4>
              <div className={classes.socialLine}>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className={classes.socialIcons + ' fa fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className={classes.socialIcons + ' fa fa-facebook'} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className={classes.socialIcons + ' fa fa-google'} />
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <CustomInput
                labelText="First Name..."
                id="first"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: 'text',
                  endAdornment: (
                    <InputAdornment position="end">
                      <People className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="Email..."
                id="email"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: 'email',
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="Password"
                id="pass"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: 'password',
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className={classes.inputIconsColor}>
                        lock_outline
                      </Icon>
                    </InputAdornment>
                  ),
                  autoComplete: 'off',
                }}
              />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button simple color="primary" size="lg">
                Login
              </Button>
              <Link to="/register">
                <Button simple color="primary" size="lg">
                  Sign Up
                </Button>
              </Link>
            </CardFooter>
          </form>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default Login;
