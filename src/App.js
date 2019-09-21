import React from 'react';
import './App.css';
import Navbar from './container/Navbar';
import Footer from './container/Footer';
import UpperContainer from './container/UpperContainer';
import Cards from './container/Cards';
import Articles from './container/Articles';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  h2Title: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    color: '#29b5ba;',
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
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(App);
