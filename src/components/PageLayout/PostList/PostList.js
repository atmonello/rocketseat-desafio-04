import React, { Component } from 'react';
import './PostList.css'

import Post from '../../Post/Post';
import postPicture from '../../../assets/profile.png';
import commentPicture from '../../../assets/profile-2.png';

class PostList extends Component {
  state = {
    posts: [
      {
        postAuthor: 'André Monello',
        postProfile: postPicture,
        date: '21 Nov 2019',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, animi esse officiis eaque quaerat veniam ipsam accusantium, assumenda, aliquid voluptatum exercitationem id! Quam sequi, consequuntur inventore suscipit dignissimos quae nemo!',
        comments: [
          {
            text: 'Id nisi laboris deserunt velit veniam dolor exercitation ipsum. Ad officia tempor enim est proident enim. Id do nostrud commodo sit fugiat minim. Et est do eiusmod consectetur culpa dolore laborum cillum ut incididunt aliqua commodo culpa dolore. Elit officia enim sunt ullamco amet non cillum ex laborum minim. Proident sunt sit voluptate veniam commodo quis ea.',
            author: 'Diego Fernandes',
            picture: commentPicture,
          },
          {
            text: 'Amet laboris enim ut ex sit cupidatat consectetur fugiat in aliqua consequat. Ipsum irure adipisicing deserunt exercitation nisi anim. Voluptate magna dolore nulla id ex consectetur. Non reprehenderit ad consequat esse dolor eiusmod fugiat nostrud.',
            author: 'Diego Fernandes',
            picture: commentPicture,
          }
        ]
      },
      {
        postAuthor: 'André Monello',
        postProfile: postPicture,
        date: '21 Nov 2019',
        text: 'Minima soluta autem necessitatibus, quis ratione, vitae officia hic earum molestiae rerum dolorum optio maiores libero amet iure cum porro perspiciatis aliquam animi aliquid. Consequatur repudiandae et sit obcaecati blanditiis.',
        comments: [
          {
            text: 'Duis dolor quis incididunt eu. Fugiat duis mollit ipsum sunt incididunt voluptate excepteur voluptate eu ad do id aute irure. Ullamco aliqua nostrud reprehenderit aliqua incididunt excepteur est excepteur ad cupidatat aute amet aliquip do.',
            author: 'Diego Fernandes',
            picture: commentPicture,
          }
        ]
      },
      {
        postAuthor: 'André Monello',
        postProfile: postPicture,
        date: '21 Nov 2019',
        text: 'Ipsum, sint. Voluptate pariatur aut quidem animi illo voluptatem ad repudiandae adipisci, similique hic eligendi amet aperiam ipsa maxime ipsum? Voluptatem enim recusandae ipsam facilis exercitationem repellendus. Inventore, enim alias.',
        comments: [
          {
            text: 'Ad ipsum ipsum sunt officia minim elit quis ad voluptate deserunt esse dolore anim. Voluptate eiusmod dolore et sunt. Do pariatur cupidatat veniam nulla laboris excepteur culpa.',
            author: 'Diego Fernandes',
            picture: commentPicture,
          },
          {
            text: 'Do consequat dolore elit aliquip amet laborum non cillum pariatur pariatur et. Nisi enim minim id quis. Sit qui dolor irure commodo in cupidatat velit proident. Fugiat magna veniam laboris et quis cupidatat mollit commodo id consequat ut. Elit consequat non minim excepteur cupidatat fugiat enim deserunt in incididunt sit nostrud. Tempor aliqua ex dolor ad Lorem. Cupidatat mollit adipisicing Lorem culpa anim.',
            author: 'Diego Fernandes',
            picture: commentPicture,
          },
          {
            text: 'Eu ea velit adipisicing dolore qui labore excepteur ullamco. Aute dolor veniam incididunt incididunt excepteur nulla veniam laboris dolore ullamco qui amet laboris. Laboris in tempor laborum sunt adipisicing nostrud.',
            author: 'Diego Fernandes',
            picture: commentPicture,
          }
        ]
      },
      {
        postAuthor: 'André Monello',
        postProfile: postPicture,
        date: '21 Nov 2019',
        text: 'Officiis illo optio vel excepturi, in amet ipsam alias sed porro sit ut error sunt praesentium quia itaque deserunt quos a delectus, deleniti similique, nostrum aspernatur libero! Repudiandae, commodi distinctio?',
        comments: [
          {
            text: 'Esse fugiat nisi ea ipsum est voluptate. Minim esse esse quis occaecat laboris nostrud do. Ea consequat aute et voluptate exercitation occaecat voluptate in fugiat. Ipsum non ullamco laboris magna ea sint. Enim fugiat labore irure incididunt. Tempor laboris et et mollit ea.',
            author: 'Diego Fernandes',
            picture: commentPicture,
          },
          {
            text: 'Aliquip nisi deserunt minim cillum enim dolor incididunt. Aliqua tempor Lorem pariatur duis Lorem. Enim velit cupidatat in ex. Duis culpa laboris sunt mollit eiusmod laborum magna irure tempor. Culpa minim incididunt officia aliqua ad cupidatat consectetur in labore incididunt in deserunt. Voluptate labore deserunt eu proident anim reprehenderit culpa amet aliquip aute enim amet voluptate. Cupidatat labore nisi quis cupidatat ut ipsum dolore ullamco aute et.',
            author: 'Diego Fernandes',
            picture: commentPicture,
          },
          {
            text: 'Tempor pariatur aute ut nisi eu. In tempor incididunt magna sunt cupidatat Lorem minim minim ad elit minim aliqua. Ad sunt deserunt voluptate ea velit esse nulla cillum minim. Do aliqua eu esse nulla minim ex ex elit amet aute. Aute reprehenderit occaecat magna proident labore occaecat id fugiat ex nisi proident.',
            author: 'Diego Fernandes',
            picture: commentPicture,
          }
        ]
      },
      {
        postAuthor: 'André Monello',
        postProfile: postPicture,
        date: '21 Nov 2019',
        text: 'Aspernatur iste totam ab perferendis delectus qui harum cum quidem blanditiis cupiditate explicabo, veritatis ea, accusantium incidunt vero, suscipit sint fuga praesentium dolor nostrum voluptas saepe nulla quis quam? Deleniti.',
        comments: [
          {
            text: 'Excepteur Lorem irure excepteur tempor laborum enim cupidatat occaecat fugiat. Incididunt est ex incididunt occaecat Lorem aliqua tempor aute labore ut id. Magna ea do consectetur est aliquip aliqua et id officia.',
            author: 'Diego Fernandes',
            picture: commentPicture,
          },
          {
            text: 'Lorem consequat ut consequat amet elit. Cupidatat minim occaecat ut nostrud commodo. Ipsum qui in ut aliqua ipsum non deserunt ea. Id nulla sunt esse excepteur aliqua exercitation elit culpa ea. Occaecat ea irure ipsum et non irure. Lorem nostrud pariatur consequat enim adipisicing ut. Voluptate exercitation aliqua fugiat esse quis amet Lorem aliquip qui fugiat.',
            author: 'Diego Fernandes',
            picture: commentPicture,
          },
          {
            text: 'Magna consectetur in proident ex deserunt aliqua cillum nisi. Ipsum enim nisi ipsum sit adipisicing commodo eiusmod minim labore ea fugiat. Consectetur sit excepteur aliqua deserunt proident est ipsum non consectetur. Irure irure do proident dolor id.',
            author: 'Diego Fernandes',
            picture: commentPicture,
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