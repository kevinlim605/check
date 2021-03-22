import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ProductListingPage from './pages/ProductListing';
import ProductPage from './pages/Product';

const store = ConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductListingPage} />
          <Route exact path="/products/product" component={ProductPage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
