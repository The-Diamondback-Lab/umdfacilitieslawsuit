import * as React from 'react';
import { GalleryNavigationLink } from "./GalleryNavigationLink";

export class GalleryNavigation extends React.Component {
  render() {
    const { images } = this.props;
    return (<div className='gallery-navigation'>
      {images.map((img, i) => <GalleryNavigationLink active={i === 0} index={i} key={i} />)}
    </div>);
  }
}
