import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/store';
import Button from './components/CustomButtons/Button';
import Badge from './components/Badge/Badge';
import Card from './components/Card/Card';
import CardBody from './components/Card/CardBody';
import { makeStyles } from '@material-ui/core/styles';
import imagesStyles from './assets/jss/material-kit-react/imagesStyles';
import { cardTitle } from './assets/jss/material-kit-react';
import Paginations from './components/Pagination/Pagination';

const styles = {
  ...imagesStyles,
  cardTitle,
};
const useStyles = makeStyles(styles);

const store = ConfigureStore();

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <div>hello</div>
        <Button type="button" color="primary">
          test
        </Button>
        <Badge color="primary">primary</Badge>
        <Card style={{ width: '20rem' }}>
          <img
            style={{ height: '180px', width: '100%', display: 'block' }}
            className={classes.imgCardTop}
            src="./images/sample.jpg"
            alt="Card-img-cap"
          />
          <CardBody>
            <h4 className={classes.cardTitle}>Card title</h4>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button color="primary">Do something</Button>
          </CardBody>
        </Card>
        <Paginations
          pages={[
            { text: 'PREV' },
            { text: 1 },
            { text: 2 },
            { active: true, text: 3 },
            { text: 4 },
            { text: 5 },
            { text: 'NEXT' },
          ]}
          color="info"
        />
        <Button color="twitter">
          <i className="fa fa-2x fa-twitter" /> Connect with Twitter
        </Button>
      </Router>
    </Provider>
  );
};

export default App;
