/* eslint-disable no-undef */

import * as React from 'react';

// Dynamic landing data
import landData from '../../data/landing.json';

/**
 * Landing section class. Renders the landing section, a full page section with
 * a background image and information about the project.
 */
export default class Landing extends React.Component {
  /**
   * Renders the landing section.
   *
   * @return {HTMLDivElement} div containing the landing section content
   */
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='landing' id='landing'>
        <div className='container'>
          <div className='title'>
            <h1>
              {landData.title}
            </h1>
            <h2>{landData.quote}</h2>
          </div>

          <div className='credit'>
            <a
              href='http://www.dbknews.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              The Diamondback
            </a>
            <p>
              Story by&nbsp;
              {
                landData.authors.map((author, i) => {
                  let authorDisplayString = author.name;

                  if (i === landData.authors.length - 2) {
                    authorDisplayString += ', and ';
                  } else if (i < landData.authors.length - 1) {
                    authorDisplayString += ', ';
                  }

                  return <a
                    key={`author-${i}`}
                    href={`https://www.dbknews.com/authors/${author.name}`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {authorDisplayString}
                  </a>;
                })
              }
            </p>
          </div>
        </div>
      </div>
    );
  }
}
