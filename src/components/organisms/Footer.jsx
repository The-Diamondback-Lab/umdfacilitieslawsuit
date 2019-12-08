/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */

// react
import * as React from 'react';

// footer data
import footerMenu from '../../data/footer.json';
import stayConnected from '../../data/stay-connected.json';
import { FooterColumn } from './FooterColumn';
import { Editors } from './Editors';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

/**
 * Footer class. Renders the footer The footer contains the mega menu (with
 * links to all categories), contact information, the stay connected menu, and
 * copyright.
 */
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerMenu: footerMenu.items,
      stayConnected: stayConnected.items
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { footerMenu } = this.state;

    this.setState({
      footerMenu: this._sanitize(footerMenu)
    });
  }

  /**
   * Renders the footer. The footer contains the mega menu (with links to all
   * categories), contact information, the stay connected menu, and copyright.
   */
  render() {
    // eslint-disable-next-line no-shadow
    const { footerMenu, stayConnected } = this.state;

    return (
      <footer>
        <div className='container'>
          <Editors />

          <p className='footer-title'>Enjoyed this story? Keep reading.</p>

          {/* categories */}
          <div className='categories'>
            {
              footerMenu.map((category) => <FooterColumn
                {...category}
                key={`footer-column-${category.id}`}
              />
              )
            }
          </div>

          <ContactInfo />

          <SocialLinks stayConnected={stayConnected} />
        </div>
      </footer>
    );
  }

  /**
   * This function takes an array of objects and santizes them - objects in this
   * array will definitely have an id, order, title, url, classes, and  children
   * property.
   *
   * @param {object[]} arr array of objects to sanitize
   * @return {object[]} array of sanitized objects.
   */
  // eslint-disable-next-line class-methods-use-this
  _sanitize(arr) {
    let _this = this;

    // build sanitized url
    // urls shouldn't include /category or /category/other-links
    function sanitizedUrl(object) {
      const { parent, title, url } = object;

      // eslint-disable-next-line no-nested-ternary
      let sanitized = parent === 84
        ? title === 'GoCollegePark'
          ? 'http://gocollegepark.com/'
          : url.replace('/category/other-links', '')
        : url.replace('/category', '');

      sanitized = sanitized.substring(0, sanitized.length - 1);

      if (title !== 'GoCollegePark') {
        sanitized = `http://dbknews.com${sanitized}`;
      }

      return sanitized;
    }

    // build sanitized object
    function sanitizedObject(object) {
      return {
        id: object.id,
        order: object.order,
        parent: object.parent,
        title: object.title,
        url: sanitizedUrl(object),
        classes: object.classes,
        children: object.children ? _this._sanitize(object.children) : null
      };
    }

    // return array of sanitized objects
    return arr.map(object => sanitizedObject(object));
  }
}
