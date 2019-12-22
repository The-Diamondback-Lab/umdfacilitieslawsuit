/* eslint-disable no-undef */

import * as React from 'react';

// react router
import { BrowserRouter } from 'react-router-dom';

// google analytics
import Analytics from 'react-router-ga';

// config
import { GOOGLE_ANALYTICS_ID } from '../config/variables.config';

// components
import { Footer, Landing, Navigation, Story } from './organisms';
import Helmet from 'react-helmet';

export default class App extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    let faviconUrl = process.env.PUBLIC_URL + '/assets/images/dbk-favicon.ico';

    return (
      <React.Fragment>
        <Helmet>
          {/* Favicon */}
          <link rel="shortcut icon" href={faviconUrl} />
        </Helmet>
        <BrowserRouter>
          <Analytics id={GOOGLE_ANALYTICS_ID} debug>
            <Navigation />
            <Landing />
            <Story />
            <Footer />
          </Analytics>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
