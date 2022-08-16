import React from "react";

export default function Post({ post }) {
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true, // can also be true or 'blocking'
  };
};

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return {
    props: { post },
  };
}
