import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';

const styles = theme => ({
  videoFrame: {
    borderRadius: '10px !important',
    border: '5px solid #1F96AE',
    width: '800px',
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '600px',
      height: '300px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '310px',
      height: '200px'
    }
  }
});

const Videos = props => {
  const { classes } = props;
  return (
    <Fragment>
      <iframe
        className={classes.videoFrame}
        title="video"
        src="https://www.youtube.com/embed/bWjPH6SVz5Q"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Fragment>
  );
};

export default withStyles(styles)(Videos);
