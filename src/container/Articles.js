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
  lowerCards:{
              fontFamily: 'Roboto',
              marginTop: '135px',
              marginLeft: '140px',
              fontSize: '30px',
              color: 'white',
              //transform: 'translate(450%, 520%)',
              position: 'absolute',
              [theme.breakpoints.down('xs')]:{
               fontSize: '40px',
                  marginTop: '95px',
                   marginLeft: '100px',
              }
  },
  biggerSquare:{
              fontFamily: 'Roboto',
              marginTop: '135px',
              marginLeft: '340px',
              fontSize: '70px',
              color: 'white',
              //transform: 'translate(450%, 520%)',
              position: 'absolute',
              [theme.breakpoints.down('xs')]:{
                fontSize: '40px',
                  marginTop: '95px',
                   marginLeft: '150px',

              }
  },
  secondBiggerSquare:{

              fontFamily: 'Roboto',
              marginTop: '135px',
              marginLeft: '140px',
              fontSize: '30px',
              color: 'white',
              //transform: 'translate(450%, 520%)',
              position: 'absolute',
              [theme.breakpoints.down('xs')]:{
                 fontSize: '40px',
                  marginTop: '95px',
                   marginLeft: '100px',
              }

  }
});

const Articles = props => {
  const { classes } = props;
  return (
    <section className="section-c">
      <div className="gallery">
        <a href="img/workin-station.jpg" id="hover">
          <p className={classes.biggerSquare}>
            Bali
          </p>
          <img src={Bali} alt="" />
        </a>

        <a href="img/imac.jpg" id="hover" className={classes.hover}>
          <p className={classes.secondBiggerSquare}>
            Shanghai
          </p>
          <img src={Shanghai} alt="" />
        </a>
        <a href="img/pc.jpg" id="hover" className={classes.hover}>
          <p
            style={{
              fontFamily: 'Roboto',
              marginTop: '235px',
              marginLeft: '140px',
              fontSize: '30px',
              color: 'white',
              //transform: 'translate(450%, 520%)',
              position: 'absolute'
            }}
          >
            Nueva York
          </p>
          <img src={NewYork} alt="" />
        </a>
        <a href="img/applez.jpg" id="hover" className={classes.hover}>
          <p className={classes.lowerCards}>
            Vietnam
          </p>
          <img src={LosAngeles} alt="" />
        </a>
        <a href="img/art-working.jpg" id="hover" className={classes.hover}>
        <p className={classes.lowerCards}>
            Londres
          </p>
          <img src={London} alt="" />
        </a>
        <a href="img/coffe-computer.jpg" id="hover" className={classes.hover}>
<p className={classes.lowerCards} >
            Cancun
          </p>
          <img src={Cancun} />
        </a>
      </div>
    </section>
  );
};

export default withStyles(styles)(Articles);
