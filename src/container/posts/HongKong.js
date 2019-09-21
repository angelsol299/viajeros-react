import React, { Fragment } from 'react';
import { Grid, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Hongkong1 from '../../img/hongkong.jpg';
const styles = theme => ({
  h2Title: {
    fontFamily: 'Roboto',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  mobileTitle: {
    fontFamily: 'Roboto',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

const Hongkong = props => {
  const { classes } = props;
  return (
    <Fragment>
      <Card style={{ border: '1px solid lightGrey', borderRadius: '10px' }}>
        <h2 className={classes.h2Title}>Hong Kong</h2>
        <div className={classes.gridContainer}>
          <div>
            <img src={Hongkong1} alt="" style={{ width: '100%' }} />
            <h2 className={classes.mobileTitle}>Hong Kong</h2>
          </div>
          <p style={{ fontFamily: 'Roboto', fontSize: '15px', margin: '20px' }}>
            Hong Kong es una urbe increible que ofrece interesantes escenas. Es
            un destino caro pero con algunas buenas opciones de hostales.
            <h3>$$$</h3>
          </p>
        </div>
      </Card>
    </Fragment>
  );
};

export default withStyles(styles)(Hongkong);
