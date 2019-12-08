/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FooterLink } from './FooterLink';

/**
 * Footer column class. Renders a footer column. Category titles are red links,
 * with the list items being black and on hover turn red.
 *
 * @param {object} props column properties - id, url, classes, title, children
 * @return {HTMLUListElement} footer column
 */
export const FooterColumn = props => {
  return (
    <ul className='footer-column' id={`footer-column-${props.id}`} key={`footer-column-${props.id}`}>
      <NavLink to={props.url} className={props.classes}>
        {props.title}
      </NavLink>
      <React.Fragment>
        {props.children.map(link => <li id={`footer-link-${link.id}`} key={`footer-link-${link.id}`}>
          <FooterLink {...link} />
        </li>)}
      </React.Fragment>
    </ul>
  );
};
