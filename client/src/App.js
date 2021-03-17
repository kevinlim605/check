import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';

const store = ConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact to="/" component={HomePage} />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
