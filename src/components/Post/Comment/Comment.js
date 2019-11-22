import React from 'react';
import './Comment.css'

function Comment({content}) {
  const {
    text,
    picture,
    author
  } = content;

  return (
    <div className="comment">
      <img className="comment-picture" src={picture}/>
      <p className="comment-text"><strong className="comment-author">{author}</strong>{text}</p>
    </div>
  );
}

export default Comment;