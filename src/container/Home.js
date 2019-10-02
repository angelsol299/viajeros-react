import React from 'react';
import '../../src/App.css';

import Navbar from './Navbar';
import Footer from './Footer';
import UpperContainer from './UpperContainer';
import Cards from './Cards';
import Articles from './Articles';
import Videos from './Videos';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  h2Title: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    color: '#0089a8',
    margin: '60px 0'
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <div className="App">
      <div>
        <Navbar />
        <br className="hiddenBr" />
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
    </div>
  );
};

export default withStyles(styles)(Home);
