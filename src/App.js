import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './config/RectotronConfig';
import GlobalStyle from './styles/global';
import Routes from './routes';
import history from './services/history';
import store from './store';

// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}
