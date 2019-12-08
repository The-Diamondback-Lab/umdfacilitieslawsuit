/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react';
import $ from 'jquery';

export class GalleryNavigationLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
    this.onClick = this.onClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  onClick(e) {
    e.preventDefault();

    let active = {
      link: e.target.id,
      image: e.target.dataset.image
    };

    let links = document.querySelectorAll('.gallery-nav-link');
    let images = document.querySelectorAll('.gallery-img');

    links.forEach(link => {
      if (active.link === link.id) {
        $(`#${link.id}`).addClass('active');
      } else {
        $(`#${link.id}`).removeClass('active');
      }
    });

    images.forEach(image => {
      if (active.image === image.id) {
        console.log('fdf');
        $(`#${image.id}`).addClass('active');
      } else {
        $(`#${image.id}`).removeClass('active');
      }
    });
  }

  render() {
    const { active, index } = this.props;
    const { clicked } = this.state;

    let id = i => `gallery-img-0${i + 1}-link`;
    let activeLink = active || clicked;

    let className = 'gallery-nav-link';
    if (activeLink) {
      className += ' active';
    }

    return <a
      className={className}
      data-image={`gallery-img-0${index + 1}`}
      id={id(index)} key={id(index)}
      onClick={this.onClick}
    />;
  }
}
