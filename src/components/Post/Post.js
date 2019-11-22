import React from 'react';
import './Post.css'

import Comment from './Comment/Comment';

function Post({post}) {
  const { 
    postAuthor, 
    date, 
    postProfile, 
    text,
    comments,
  } = post;

  return (
    <li className="post-list-item">
      <div className="post-header">
        <img className="post-profile" src={postProfile} />
        <aside className="post-credits">
          <p className="post-author">{postAuthor}</p>
          <small className="post-date">{date}</small>
        </aside>
      </div>
      <div className="post-content">
        <p>{text}</p>
      </div>
      <div className="post-comments">
        {comments.map((comment, index) => <Comment key={index} content={comment.text} />)}
      </div>
    </li>
  );
}

export default Post;