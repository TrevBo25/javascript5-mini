import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import App1 from './Components/App1/App1';
import App2 from './Components/App2/App2';
import App3 from './Components/App3/App3';
import App4 from './Components/App4/App4';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/app1" component={App1} />
    <Route path="/app2" component={App2} />
    <Route path="/app3" component={App3} />
    <Route path="/app4" component={App4} />
  </Switch>
)