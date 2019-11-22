import React from 'react';

function Post({post}) {
  const { title } = post;

  return (
    <>
      <p>{title}</p>
    </>
  );
}

export default Post;