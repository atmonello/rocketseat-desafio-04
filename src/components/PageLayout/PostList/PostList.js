import React, { Component } from 'react';

import Post from '../../Post/Post';

class PostList extends Component {
  state = {
    posts: [
      {
        title: 'Lalalalalala'
      },
      {
        title: 'Lelelelele'
      },
      {
        title: 'Lilililili'
      }
    ]
  };

  render() {
    return (
      <section id="post-list">
        {this.state.posts.map((post, index) => (
          <Post
            key={index}
            post={post}
          />
        ))}
      </section>
    );
  }
}

export default PostList;