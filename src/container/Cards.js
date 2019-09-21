import React from 'react';

import { Grid, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Vietnam from './posts/Vietnam';
import HongKong from './posts/HongKong';
import Filipinas from './posts/Filipinas';

const styles = theme => ({
  h2Title: {
    fontFamily: 'Roboto'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '4fr 4fr 4fr',
    gridGap: '30px',
    margin: '10px 30px',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  spaceMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  brMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

const Cards = props => {
  const { classes } = props;

  return (
    <div className={classes.gridContainer}>
      <Vietnam />
      <br className={classes.brMobile} />
      <HongKong />
      <br className={classes.brMobile} />
      <Filipinas />
    </div>
  );
};

export default withStyles(styles)(Cards);
