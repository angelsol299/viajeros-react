import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import Bali from '../../img/bali.jpg';
import Shanghai from '../../img/shanghai.jpg';
import LosAngeles from '../../img/losAngeles.jpg';
import NewYork from '../../img/newYork.jpg';
import Cancun from '../../img/cancun.jpg';
import London from '../../img/london.jpg';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  h2Title: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    color: '#0089a8',
    margin: '60px 0'
  },
  divGridContainer: {
    textAlign: 'center',
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: '300px 300px 300px 300px',
    gridGap: '50px',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '100px',
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '250px 250px 250px 250px'
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '300px'
    }
  },
  divGridChild: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    [theme.breakpoints.down('xs')]: {
      //display: 'block'
    }
  },
  img1: {
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    width: '300px',
    height: '200px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${Bali}) no-repeat`,
    [theme.breakpoints.down('xs')]: {
      height: '200px',
      width: '300px'
    }
  },
  img2: {
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    width: '300px',
    height: '200px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${Shanghai}) no-repeat`,
    [theme.breakpoints.down('xs')]: {
      height: '200px',
      width: '300px'
    }
  },
  img3: {
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    width: '300px',
    height: '200px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${LosAngeles}) no-repeat`,
    [theme.breakpoints.down('xs')]: {
      height: '200px',
      width: '300px'
    }
  },
  img4: {
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    width: '300px',
    height: '200px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${NewYork}) no-repeat`,
    [theme.breakpoints.down('xs')]: {
      height: '200px',
      width: '300px'
    }
  },
  img5: {
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    width: '300px',
    height: '200px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${Cancun}) no-repeat`,
    [theme.breakpoints.down('xs')]: {
      height: '200px',
      width: '300px'
    }
  },
  img6: {
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    width: '300px',
    height: '200px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${London}) no-repeat`,
    [theme.breakpoints.down('xs')]: {
      height: '200px',
      width: '300px'
    }
  },
  hiddenBr: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
});

const ArticlesMain = props => {
  const { classes } = props;
  return (
    <div>
      <NavBar />
      <div className={classes.divGridContainer}>
        <div className={classes.img1}></div>
        <p>
          {' '}
          <h2>24 horas en Shanghai</h2>
          Con sus luces, sus edificios, sus comidas y su gente
        </p>
        <div className={classes.img2}></div>
        <p>
          {' '}
          <h2>24 horas en Shanghai</h2>
          Con sus luces, sus edificios, sus comidas y su gente
        </p>
        <div className={classes.img3}></div>
        <p>24 horas en Shanghai</p>
        <div className={classes.img4}></div>
        <p>ksjhdjkh</p>
        <div className={classes.img5}></div>
        <p>24 horas en Shanghai</p>
        <div className={classes.img6}></div>
        <p>ksjhdjkh</p>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(ArticlesMain);
