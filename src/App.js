import React from 'react';
import './App.css';
import Navbar from './container/Navbar';
import UpperContainer from './container/UpperContainer';
import Cards from './container/Cards';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  h2Title: {
    fontFamily: 'Roboto',
    fontSize: '20px'
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
      <Cards />
    </div>
  );
};

export default withStyles(styles)(App);
