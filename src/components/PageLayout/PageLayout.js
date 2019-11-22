import React from 'react';
import './PageLayout.css';

import Header from './Header/Header';
import PostList from './PostList/PostList';

function PageLayout() {
  return (
    <main>
      <Header />
      <article id="layout-main">
        <PostList />
      </article>
    </main>
  );
}

export default PageLayout;