import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
        <Route path="/products/product" component={ProductPage} />
        <Route path="/products" component={ProductListingPage} />
        <Route exact path="/" component={HomePage} />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
