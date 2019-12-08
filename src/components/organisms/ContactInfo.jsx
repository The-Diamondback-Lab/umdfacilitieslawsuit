import React from 'react';
import { Link } from 'react-router-dom';

export default class ContactInfo extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='contact-editors'>
        <div className='contact'>
          <p className='contact-title-link'>
            Contact Us
          </p>

          <dl className='contact-phone'>
            <dt>
              <span>Newsroom</span>:{' '}
              <Link to='tel:+3013148200'>301-314-8200</Link><br />
            </dt>
            <dd className='hours'>
              (4:30 p.m. to midnight, Sundays through Thursdays)
            </dd>
          </dl>

          <dl className='contact-phone'>
            <dt>
              <span>Advertising</span>:{' '}
              <Link to='tel:+3013148000'>301-314-8000</Link><br />
            </dt>
            <dd>
              <span className='hours'>
                (normal business hours, Mondays through Fridays)
              </span>
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}
