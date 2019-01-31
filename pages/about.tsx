import React from "react";
import Link from "next/link";
import Head from "next/head"

export default () => {
  return (
    <>
    <Head>
      <title>About Page</title>
    </Head>
      <Link href="/">
        <button>Home</button>
      </Link>
      <h3>About us</h3>
    </>
  );
};
