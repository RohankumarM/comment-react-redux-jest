import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './Root';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Root>
    <Router>
      <Route path="/" component={App}></Route>
    </Router>
  </Root>,
  document.getElementById('root'));