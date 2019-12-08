/* eslint-disable array-callback-return */
/* eslint-disable no-undef */

import * as React from 'react';

// data
import sections from '../../data/sections.json';

// components
import { Section } from '../templates';

export default class Story extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div id='story' className='story'>
        <div className='container'>
          {sections.map((s, i) => {
            if (i !== 0) {
              return <Section {...s} key={`section-0${i}`} />;
            }
          })}
        </div>
      </div>
    );
  }
}
