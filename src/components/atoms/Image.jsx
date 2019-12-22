/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */

import * as React from 'react';

export default class Image extends React.Component {
  render() {
    const { url, caption, credit } = this.props;

    if (url) {
      const id = url.replace('/assets/images/', '').replace('.jpg', '');
      let newUrl = process.env.PUBLIC_URL + url;

      return (
        <figure id={id} className='section-img'>
          <img src={newUrl} alt={caption} title={process.env.PUBLIC_URL}/>
          <figcaption>
            <p
              className='caption'
              dangerouslySetInnerHTML={{ __html: caption }}
            />
            <p
              className='credit'
              dangerouslySetInnerHTML={{ __html: `Photo by ${credit}` }}
            />
          </figcaption>
        </figure>
      );
    } else {
      return null;
    }
  }
}
