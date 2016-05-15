import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Home from '../components/home/index';
import Layout from '../components/layout/layout';

render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={Layout}>
       <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('app'));
