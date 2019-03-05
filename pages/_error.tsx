import React from 'react';

function Error({ statusCode }) {
  return (
    <>
      <h1>Welcome to the custom Error page</h1>
      <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
    </>
  );
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { namespacesRequired: ['common'], statusCode };
};

export default Error;
