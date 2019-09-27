import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../App';
import Articles from './Articles';
import Cards from './Cards';

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/cards" component={Cards} />
    </div>
  );
};

export default Routes;
