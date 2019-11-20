import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateComponent from './components/createcomponent';
import EditComponent from './components/editcomponent';
import App from './App';
const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/create" component={CreateComponent} />
    <Route exact path="/edit" component={EditComponent} />
  </Switch>
);

export default Routes;
