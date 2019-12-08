import React from 'react';

/**
 * Footer link class. Renders a footer link. Footer links, with the exception of
 * telephone links, are black. On hover, they are black and bold.
 *
 * @param {object} props link properties - url, classes, and title
 * @return {HTMLAnchorElement} footer link
 */
export const FooterLink = props => {
  return (<a href={props.url} className={props.classes} target='_blank' rel='noopener noreferrer'>
    {props.title}
  </a>);
};
