import React from 'react';
import { Router } from 'react-router-dom';
import './config/RectotronConfig';

import Routes from './routes';
import history from './services/history';

// import { Container } from './styles';

export default function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
