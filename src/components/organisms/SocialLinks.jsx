import React from 'react';
import { FooterLink } from './FooterLink';

export default class SocialLinks extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='stay-connected-copyright row'>
        <div className='stay-connected'>
          <p>Stay Connected</p>
          {this.props.stayConnected.map((link, i) => <FooterLink {...link} key={i} />)}
        </div>

        <div className='copyright'>
          <a
            href='http://www.dbknews.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='copyright-lab'
          >
            &copy; 2018 The Diamondback
          </a>

          <a
            href='https://lexusdrumgold.design/'
            target='_blank'
            rel='noopener noreferrer'
            className='copyright-lex'
          >
            Designed and Developed by Lexus Drumgold
          </a>
        </div>
      </div>
    );
  }
}
