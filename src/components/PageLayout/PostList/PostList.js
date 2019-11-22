import React, { Component } from 'react';
import './PostList.css'

import Post from '../../Post/Post';

class PostList extends Component {
  state = {
    posts: [
      {
        title: 'Lalalalalala',
        comments: [
          {
            text: '1'
          },
          {
            text: '2'
          }
        ]
      },
      {
        title: 'Lelelelele',
        comments: [
          {
            text: '1'
          }
        ]
      },
      {
        title: 'Lilililili',
        comments: [
          {
            text: '1'
          },
          {
            text: '2'
          },
          {
            text: '3'
          }
        ]
      },
      {
        title: 'Lololololo',
        comments: [
          {
            text: '1'
          },
          {
            text: '2'
          },
          {
            text: '3'
          }
        ]
      },
      {
        title: 'Lulululu',
        comments: [
          {
            text: '1'
          },
          {
            text: '2'
          },
          {
            text: '3'
          }
        ]
      },
    ]
  };

  render() {
    return (
      <ul id="post-list">
        {this.state.posts.map((post, index) => (
          <Post
            key={index}
            post={post}
          />
        ))}
      </ul>
    );
  }
}

export default PostList;