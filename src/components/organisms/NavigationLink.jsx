import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import $ from 'jquery';
import { BREAKPOINTS, COLORS } from '../../config/variables.config';

export class NavigationLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: $(window).width() > BREAKPOINTS.schmedium
        ? props.heading
        : `#${props.id.toUpperCase().replace('-', ' ')}`
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { id, heading } = this.props;
    $(`#navigation-link-${id}`).hover(() => {
      if ($(window).width() > BREAKPOINTS.schmedium) {
        $(`#navigation-text-${id}`).css(({
          backgroundColor: COLORS.dark[0],
          height: 'auto',
          opacity: 1,
          padding: '.5em 1.5em'
        }));
      }
    }, () => {
      if ($(window).width() > BREAKPOINTS.schmedium) {
        $('#navigation').css({ backgroundColor: 'transparent' });
        $(`#navigation-text-${id}`).css(({
          height: 0,
          opacity: 0,
          padding: 0
        }));
      }
    });
    $(window).resize(() => {
      if ($(window).width() > BREAKPOINTS.schmedium) {
        this.setState({ text: heading });
      } else {
        this.setState({ text: `#${id.toUpperCase().replace('-', ' ')}` });
      }
    });
  }

  render() {
    const { text } = this.state;
    const { id, line } = this.props;

    return (<div className='navigation-link'>
      <div>
        <NavLink
          className='navigation-link-circle'
          id={`navigation-link-${id}`}
          onClick={this.onClick}
          smooth to={`#${id}`}
        />

        {line ? <div className='navigation-link-line' /> : null}
      </div>
      <a href={`#${id}`} id={`navigation-text-${id}`}>
        {text}
      </a>
    </div>);
  }

  // eslint-disable-next-line class-methods-use-this
  onClick(e) {
    // e.preventDefault();
    let linkId = `${e.target.id}`;
    let links = document.querySelectorAll('.navigation-link-circle');

    links.forEach(link => {
      if (linkId === link.id) {
        $(`#${link.id}`).addClass('active');
      } else {
        $(`#${link.id}`).removeClass('active');
      }
    });
  }
}
