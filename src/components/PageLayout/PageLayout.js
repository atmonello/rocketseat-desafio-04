import React from 'react';
import './PageLayout.css';

import Header from './Header/Header';

function PageLayout() {
  return (
    <main>
      <Header />
      <article id="layout-main"></article>
    </main>
  );
}

export default PageLayout;