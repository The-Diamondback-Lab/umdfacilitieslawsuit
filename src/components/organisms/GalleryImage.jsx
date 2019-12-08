import * as React from 'react';
import { Image } from '../atoms';

export class GalleryImage extends React.Component {
  render() {
    const { image, index } = this.props;
    let id = i => `gallery-img-0${i}`;
    return (<div className={`${index === 0 ? 'active ' : ''}gallery-img`} id={id(index + 1)}>
      <Image {...image} />
    </div>);
  }
}
