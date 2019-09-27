import React from 'react';
import Cancun from '../img/cancun.jpg';
import Shanghai from '../img/shanghai.jpg';
import Bali from '../img/bali.jpg';
import NewYork from '../img/newYork.jpg';
import LosAngeles from '../img/losAngeles.jpg';
import London from '../img/london.jpg';
import { withStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';

const styles = theme => ({
  hover: {
    background: 'rgba(255, 0, 0, 0.95),',
    '&:hover': {
      background: 'black'
    }
  },
  img1: {
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    width: 'auto',
    height: '700px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${Bali}) no-repeat`
  },
  img2: {
    alignItems: 'center',
    display: 'grid',
    width: '100%',
    alignContent: 'center',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${Shanghai}) no-repeat`
  },
  img3: {
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    width: 'auto',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${NewYork}) no-repeat`
  },
  img4: {
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    width: 'auto',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${LosAngeles}) no-repeat`
  },
  img5: {
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    width: 'auto',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${London}) no-repeat`
  },
  img6: {
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    width: 'auto',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: `url(${Cancun}) no-repeat`
  },
  img3Text: {
    fontSize: '40px',
    fontFamily: 'Roboto',
    color: 'white'
  }
});

const Articles = props => {
  const { classes } = props;
  return (
    <section className="section-c">
      <div className="gallery">
        <a
          href="img/workin-station.jpg"
          id="hover"
          style={{ display: 'block' }}
        >
          <div className={classes.img1}>
            <p className={classes.img3Text}>Bali</p>
          </div>
        </a>

        <a
          href="img/imac.jpg"
          id="hover"
          className={classes.hover}
          style={{ display: 'block' }}
        >
          <div className={classes.img2}>
            <p className={classes.img3Text}>Shanghai</p>
          </div>
        </a>
        <a
          href="img/pc.jpg"
          id="hover"
          className={classes.hover}
          style={{ display: 'block' }}
        >
          <div className={classes.img3}>
            <p className={classes.img3Text}>Nueva York</p>
          </div>
        </a>
        <a href="img/applez.jpg" id="hover" className={classes.hover}>
          <div className={classes.img4}>
            <p className={classes.img3Text}>Los Angeles</p>
          </div>
        </a>
        <a href="img/art-working.jpg" id="hover" className={classes.hover}>
          <div className={classes.img5}>
            <p className={classes.img3Text}>Londres</p>
          </div>
        </a>
        <a href="img/coffe-computer.jpg" id="hover" className={classes.hover}>
          <div className={classes.img6}>
            <p className={classes.img3Text}>Cancun</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default withStyles(styles)(Articles);
