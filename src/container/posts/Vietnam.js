import React, { Fragment } from 'react';
import { Grid, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Vietnam1 from '../../img/selling.jpg';
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

const Vietnam = props => {
  const { classes } = props;
  return (
    <Fragment>
      <Card
        style={{
          border: '1px solid lightGrey',
          borderRadius: '10px'
        }}
      >
        <h2 className={classes.h2Title}>Vietnam</h2>
        <div className={classes.gridContainer}>
          <div>
            <img src={Vietnam1} alt="" style={{ width: '100%' }} />
            <h2 className={classes.mobileTitle}>Vietnam</h2>
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

export default withStyles(styles)(Vietnam);
