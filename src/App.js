import React from 'react';
import './App.css';
import Navbar from './container/Navbar';
import Footer from './container/Footer';
import UpperContainer from './container/UpperContainer';
import Cards from './container/Cards';
import Articles from './container/Articles';
import Routes from './container/Rooutes';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Videos from './container/Videos';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  h2Title: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    color: '#0089a8',
    margin: '60px 0'
  }
});

const App = props => {
  const { classes } = props;
  return (
    <div className="App">
      <Navbar />
      <br />
      <UpperContainer />
      <div className={classes.h2Title}>
        <h2>Guías de viajes</h2>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Cards />
      </div>
      <div className={classes.h2Title}>
        <h2>Articulos</h2>
      </div>
      <div>
        <Articles />
      </div>
      <div className={classes.h2Title}>
        <h2>Videos</h2>
      </div>
      <div>
        <Videos />
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(App);
