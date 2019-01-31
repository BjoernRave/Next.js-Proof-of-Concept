import Head from "next/head";

// for easier seo management: https://github.com/garmeeh/next-seo

/**
 * This is the meta component
 */
export default () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    /** Description of prop "foo". */
    <meta name="description" content="Nextjs Test App"/>
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link rel="manifest" href="/static/manifest.json" />
    <title>NextTest</title>
  </Head>
);
