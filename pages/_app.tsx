// App can be seen as the top level component of the compnent tree.
// In here you can inject stuff to be available in every component like a global store or global styles
import React from 'react';

import App, { Container } from 'next/app';

// import Meta to define the place of the meta tag in the dom
import Meta from 'components/Meta';

//import TranslationProvider HOC
import i18n from 'lib/i18n';
import { I18nextProvider } from 'react-i18next';

// require fetch library to ensure fetch is working on server and every client
require('isomorphic-fetch');

// require('hosco-font');

import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

export const theme = {
  colors: {
    hoscoBlue: '#1898c2',
  },
};

class MyApp extends App {
  //getInitialProps is a lifecycle hook provided by nextjs. In here is a good place to fetch data from an API. the fetch will be executed, before the first render call
  //We also use an es6 feature called destructuring. We extract the three properties of the object, that is provided to getInitialProps
  // Component is in this case every other component inside the /pages directory
  // more details here: https://nextjs.org/docs#fetching-data-and-component-lifecycle
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    //another example of destructuring, this is the same as: `const Component = this.props.Component; const pageProps = this.props.pageProps
    const { Component, pageProps } = this.props;

    return (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <Container>
            <Global
              styles={css`
                * {
                  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                  transition: all linear 0.1s;
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
              `}
            />
            <Meta />
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </I18nextProvider>
    );
  }
}

export default MyApp;
