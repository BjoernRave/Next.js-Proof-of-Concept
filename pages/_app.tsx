// App can be seen as the top level component of the compnent tree.
// In here you can inject stuff to be available in every component like a global store or global styles
import React from 'react'


import App, { Container } from 'next/app'

// import Meta to define the place of the meta tag in the dom
import Meta from "../components/Meta"

// require fetch library to ensure fetch is working on server and every client
require("isomorphic-fetch")

export default class MyApp extends App {
  //getInitialProps is a lifecycle hook provided by nextjs. In here is a good place to fetch data from an API. the fetch will be executed, before the first render call
  //We also use an es6 feature called destructuring. We extract the three properties of the object, that is provided to getInitialProps
  // Component is in this case every other component inside the /pages directory
  // more details here: https://nextjs.org/docs#fetching-data-and-component-lifecycle
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    // here we check if the current browser supports serviceWorker
    if ("serviceWorker" in navigator) {
      //here we deploy the service-worker created by the webpack plugin on the clients machine
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful: ", registration);
        })
        .catch(err => {
          console.warn("service worker registration failed", err.message);
        });
    }
  }

  render () {
    //another example of destructuring, this is the same as: `const Component = this.props.Component; const pageProps = this.props.pageProps
    const { Component, pageProps } = this.props

    return (
      <Container>
          <Meta></Meta>
          //here we inject the data we got from the return statement of getInitialProps (the data we fetched from the API)
          // into the top level component, again by using object destructuring so we pass each property of pageProps individually to the component
        <Component {...pageProps} />
      </Container>
    )
  }
}
