import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';
import foodTypeSaga from './sagas/foodTypeSaga';
import Header from './App/Header';
import SideBar from './App/SideBar';
import Content from './App/Content';
import './style.scss';

store.runSaga(foodTypeSaga);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <div style={{ height: '10vh' }}>
          <Header />
        </div>
        <div style={{ display: 'flex', height: '90vh' }}>
          <div style={{ width: '15%' }}>
            <SideBar />
          </div>
          <div style={{ width: '80%' }}>
            <Content />
          </div>
        </div>
      </Router>
    </Provider>
  ),
  document.getElementById('root'),
);
