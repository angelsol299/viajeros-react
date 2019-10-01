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
    gridTemplateColumns: '700px 700px',
    gridGap: '100px',
    justifyContent: 'center',
    alignContent: 'center'
  },
  divGridChild: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
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
    [theme.breakpoints.down('sm')]: {
      height: '100%'
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
    [theme.breakpoints.down('sm')]: {
      height: '100%'
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
    [theme.breakpoints.down('sm')]: {
      height: '100%'
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
    [theme.breakpoints.down('sm')]: {
      height: '100%'
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
    [theme.breakpoints.down('sm')]: {
      height: '100%'
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
    [theme.breakpoints.down('sm')]: {
      height: '100%'
    }
  }
});

const ArticlesMain = props => {
  const { classes } = props;
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div className={classes.divGridContainer}>
        <div className={classes.divGridChild}>
          <div className={classes.img1}></div>
          <p>
            {' '}
            <h2>24 horas en Shanghai</h2>
            Con sus luces, sus edificios, sus comidas y su gente
          </p>
        </div>

        <div className={classes.divGridChild}>
          <div className={classes.img2}></div>
          <p>ksjhdjkh</p>
        </div>
      </div>
      <br />
      <br />
      <div className={classes.divGridContainer}>
        <div className={classes.divGridChild}>
          <div className={classes.img3}></div>
          <p>24 horas en Shanghai</p>
        </div>

        <div className={classes.divGridChild}>
          <div className={classes.img4}></div>
          <p>ksjhdjkh</p>
        </div>
      </div>
      <br />
      <br />
      <div className={classes.divGridContainer}>
        <div className={classes.divGridChild}>
          <div className={classes.img5}></div>
          <p>24 horas en Shanghai</p>
        </div>

        <div className={classes.divGridChild}>
          <div className={classes.img6}></div>
          <p>ksjhdjkh</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(ArticlesMain);
