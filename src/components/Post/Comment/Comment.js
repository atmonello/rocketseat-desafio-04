import React from 'react';
import './Comment.css'

function Comment({content}) {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
}

export default Comment;