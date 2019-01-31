import React from "react";
import Link from "next/link";
import Head from "next/head"

interface IPost {
  userId: Number;
  id: Number;
  title: String;
  body: String;
}

const Index = ({ data }: { data: IPost[] }) => {
  return (
    <>
    <Head>
      <title>Landing Page</title>
    </Head>
      <Link href="/about" prefetch>
        <button>About Page</button>
      </Link>
      {data.map(post => (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      ))}
    </>
  );
};

Index.getInitialProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    res => res.json()
  );
  return { data };
};

export default Index;
