import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

function About() {
  const [post, setPost] = useState(null);
  const [number, setNumber] = useState(0);
  const { t } = useTranslation();

  const getPost = async () => {
    console.log(typeof number);
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${number}`).then(res => res.json());
    console.log(post);
    setPost(post);
  };

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <h1>{t('header')}</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      <h3>About us</h3>
      <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
      <button onClick={getPost}>Search Post</button>
      {post && (
        <>
          <h1>{post.title}</h1>
        </>
      )}
    </>
  );
}

export default About;
