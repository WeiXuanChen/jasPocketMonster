import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';
import foodTypeSaga from './sagas/foodTypeSaga';
import Header from './App/Header';
import Footer from './App/Footer';
import Content from './App/Content';
import './style.scss';

store.runSaga(foodTypeSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div style={{ height: '6vh' }}>
        <Header />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
