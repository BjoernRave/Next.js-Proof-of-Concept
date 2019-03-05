import React from 'react';
import Router from 'next/router';

export default function SinglePost({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

SinglePost.getInitialProps = async ({ query, res, jsonPageRes }) => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`).then(res => res.json());
  if (Object.entries(post).length === 0) {
    if (res) {
      res.statusCode = 404;
      console.log('test2');
    } else if (jsonPageRes) {
      console.log('test');
      jsonPageRes.statusCode = 404;
    }
    Router.push('/error');
  }
  return { post };
};
`´`;
