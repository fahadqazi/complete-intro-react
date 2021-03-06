import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import Search from './Search';
import Landing from './Landing';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path='/search' component={Search} />
    <Route path="/landing" component={Landing}/>
  </Router>
), document.getElementById('root'))