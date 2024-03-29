import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './container/Home';
import Cards from './container/Cards';
import ArticlesMain from './container/articles/ArticlesMain';
import Viajes from './container/viajes/Viajes';

const Hello = () => {
  return (
    <div>
      <p>just a test</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/viajes" component={Viajes} />
        <Route path="/articles" component={ArticlesMain} />
        <Route path="/hello" component={Hello} />
      </BrowserRouter>
    </div>
  );
};

export default App;
