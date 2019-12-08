/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */

import * as React from 'react';

import { GalleryImage } from './GalleryImage';
import { GalleryNavigation } from './GalleryNavigation';

export default class Gallery extends React.Component {
  render() {
    const { images } = this.props;

    return (
      <div className='gallery' id='gallery'>
        <div className='gallery-images'>
          {images.map((image, index) => <GalleryImage image={image} index={index} key={index} />)}
        </div>
        <GalleryNavigation images={images} />
      </div >
    );
  }
}
