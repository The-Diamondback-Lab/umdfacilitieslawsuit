/* eslint-disable no-undef */

import * as React from 'react';

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
              The story behind a $3 million racial discrimination lawsuit at UMD
            </h1>
            <h2>&quot;Maryland has wrecked my life&quot;</h2>
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
              <a
                href='http://www.dbknews.com/author/jatelsek/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Jillian Atelsek
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
