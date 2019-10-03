import React, { Fragment } from 'react';
import { Grid, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Filipinas1 from '../../img/filipinas.jpg';
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
  },
  cards: {
    border: '1px solid lightGrey',
    borderRadius: '10px',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '0px',
      border: '0px',
      boxShadow: '0px'
    }
  }
});

const Filipinas = props => {
  const { classes } = props;
  return (
    <Fragment>
      <Card className={classes.cards}>
        <h2 className={classes.h2Title}>Filipinas</h2>
        <div className={classes.gridContainer}>
          <div>
            <img src={Filipinas1} alt="" style={{ width: '100%' }} />
            <h2 className={classes.mobileTitle}>Filipinas</h2>
          </div>
          <p style={{ fontFamily: 'Roboto', fontSize: '15px', margin: '20px' }}>
            Visita a vietnam y sus incribles paisajes. En este guía de viaje te
            explicaremos donde hospedarte cuanto gastar y cuáles son las
            atracciones principales
            <h3>$</h3>
          </p>
        </div>
      </Card>
    </Fragment>
  );
};

export default withStyles(styles)(Filipinas);
