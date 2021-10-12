import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

import './App.css';

const VegetablesPage = () => (
  <div>
    <h1>Vegetables Page </h1>
  </div>
);

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/vegetables' component={VegetablesPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;