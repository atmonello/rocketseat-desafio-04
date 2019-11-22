import React, { Component } from 'react';
import './PostList.css'

import Post from '../../Post/Post';
import profilePicture from '../../../assets/profile.png'

class PostList extends Component {
  state = {
    posts: [
      {
        postAuthor: 'André Monello',
        postProfile: profilePicture,
        date: '21 Nov 2019',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, animi esse officiis eaque quaerat veniam ipsam accusantium, assumenda, aliquid voluptatum exercitationem id! Quam sequi, consequuntur inventore suscipit dignissimos quae nemo!',
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
        postAuthor: 'André Monello',
        postProfile: profilePicture,
        date: '21 Nov 2019',
        text: 'Minima soluta autem necessitatibus, quis ratione, vitae officia hic earum molestiae rerum dolorum optio maiores libero amet iure cum porro perspiciatis aliquam animi aliquid. Consequatur repudiandae et sit obcaecati blanditiis.',
        comments: [
          {
            text: '1'
          }
        ]
      },
      {
        postAuthor: 'André Monello',
        postProfile: profilePicture,
        date: '21 Nov 2019',
        text: 'Ipsum, sint. Voluptate pariatur aut quidem animi illo voluptatem ad repudiandae adipisci, similique hic eligendi amet aperiam ipsa maxime ipsum? Voluptatem enim recusandae ipsam facilis exercitationem repellendus. Inventore, enim alias.',
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
        postAuthor: 'André Monello',
        postProfile: profilePicture,
        date: '21 Nov 2019',
        text: 'Officiis illo optio vel excepturi, in amet ipsam alias sed porro sit ut error sunt praesentium quia itaque deserunt quos a delectus, deleniti similique, nostrum aspernatur libero! Repudiandae, commodi distinctio?',
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
        postAuthor: 'André Monello',
        postProfile: profilePicture,
        date: '21 Nov 2019',
        text: 'Aspernatur iste totam ab perferendis delectus qui harum cum quidem blanditiis cupiditate explicabo, veritatis ea, accusantium incidunt vero, suscipit sint fuga praesentium dolor nostrum voluptas saepe nulla quis quam? Deleniti.',
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