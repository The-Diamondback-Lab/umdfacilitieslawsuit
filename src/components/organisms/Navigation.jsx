/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */

// NOTICE: importing reactn instead of react
import React from 'react';

// react router
import { NavHashLink as NavLink } from 'react-router-hash-link';

// sections
import sections from '../../data/sections.json';
import { NavigationLink } from './NavigationLink';

export default class Navigation extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div id='navigation'>
        <div className='container'>
          <nav className='navigation'>
            <div className='container'>
              <NavLink smooth to='#landing'>
                <i className='far fa-location-arrow' />
              </NavLink>
              {sections.map((s, i) => {
                if (i > 0) {
                  return (
                    <NavigationLink
                      id={s.id}
                      heading={i === 1 ? '"Maryland has wrecked my life"' : s.heading}
                      active={i === 0}
                      line={i !== 6}
                      index={i}
                      key={s.id}
                    />
                  );
                } else {
                  return null;
                }
              }
              )}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
