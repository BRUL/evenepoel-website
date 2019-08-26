import React, { Component } from 'react';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage'
import Carousel from 'react-bootstrap/Carousel'

import './Splash.scss';

class Splash extends Component {
  render() {
    return (
      <div className="App-Splash">
        <Carousel indicators={false} interval={30000}>
          <Carousel.Item>
            <ResponsiveImage projectName="kolom" imageName="kolom-interactie" alt="" title=""/>
          </Carousel.Item>
          <Carousel.Item>
            <ResponsiveImage projectName="kolom" imageName="kolom-schuin" alt="" title=""/>
          </Carousel.Item>
          <Carousel.Item>
            <ResponsiveImage projectName="kolom" imageName="kolom-recht" alt="" title=""/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Splash;
