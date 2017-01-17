import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './Layout';
import About from './views/About';
import Assignment from './views/Assignment';
import Home from './views/Home';


export default () => (
  <Router history={browserHistory} >
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path='assignment/:id' component={Assignment} />
    </Route>
  </Router>
);
