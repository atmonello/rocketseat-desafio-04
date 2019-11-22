import React from 'react';
import './Post.css'

import Comment from './Comment/Comment';

function Post({post}) {
  const { title, comments } = post;

  return (
    <li className="post-list-item">
      <div className="post-header">
        <h3>{title}</h3>
      </div>
      <div className="post-comments">
        {comments.map((comment, index) => <Comment key={index} content={comment.text} />)}
      </div>
    </li>
  );
}

export default Post;