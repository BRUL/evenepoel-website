import React, { Component } from 'react';
import classnames from 'classnames';

import './ResponsiveImage.scss';

import base64Thumbs from '../../base64-images/result';

class ResponsiveImage extends Component {
  constructor(props) {
    super(props);

    this.onImageLoaded = this.onImageLoaded.bind(this);

    this.state = {
      loaded: false
    };
  }

  onImageLoaded() {
    this.setState({
      loaded: true
    });
  }

  render() {
    const { projectName, imageName, alt, title } = this.props;
    const { loaded } = this.state;

    const classNames = classnames('ResponsiveImage', { 'loaded': loaded });

    return (
      <img className={classNames}
           src={`${base64Thumbs[`${projectName}/${imageName}`]}`}
           srcSet={`
               /responsive-images/${projectName}/${imageName}-large_@2x.jpg 3000w,
               /responsive-images/${projectName}/${imageName}-large_@1x.jpg 1500w,
               /responsive-images/${projectName}/${imageName}-medium_@2x.jpg 1440w,
               /responsive-images/${projectName}/${imageName}-medium_@1x.jpg 720w,
               /responsive-images/${projectName}/${imageName}-small_@2x.jpg 600w,
               /responsive-images/${projectName}/${imageName}-small_@1x.jpg 300w,
               /responsive-images/${projectName}/${imageName}-tiny_@2x.jpg 290w,
               /responsive-images/${projectName}/${imageName}-tiny_@1x.jpg 145w
             `}
           sizes="
              (min-width: 768px) calc(50vw),
              calc(100vw)
             "
           alt={alt} title={title}
           onLoad={this.onImageLoaded} />
    );
  }
}

export default ResponsiveImage;
