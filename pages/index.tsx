import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ResultBox = styled.ul`
  width: 70%;
  margin: 0 auto;
  overflow: scroll;
  height: 80vh;
`;

const Index = ({ data }: { data: IPost[] }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <h1>{t('introduction')}</h1>
      <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}>Change Language</button>
      <Link href="/about" prefetch>
        <button>About Page</button>
      </Link>
      <Link href="/faulty" prefetch>
        <button>Faulty Link</button>
      </Link>
      <Link href="/hosco" prefetch>
        <button>Go to Hosco via redirect</button>
      </Link>
      <Link href="/home" prefetch>
        <button>Go to new Homepage</button>
      </Link>
      <ResultBox>
        {data.map(post => (
          <li key={post.id}>
            <Link href={{ pathname: '/post', query: { id: post.id } }}>
              <a>{post.title}</a>
            </Link>
            <p>{post.body}</p>
            <a>Go to Details</a>
          </li>
        ))}
      </ResultBox>
      <Link href={{ pathname: '/post', query: { id: 'apples' } }}>
        <button>Faulty Details Page</button>
      </Link>
    </>
  );
};

Index.getInitialProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
  return { data };
};

export default Index;
