import React from 'react';
import ArticlesList from './articles/ArticlesList';

function Home() {
  return (
    <div className="Home ">
      <h3 className="text-white">Sort those Articles</h3>
      <ArticlesList />
    </div>
  );
}

export default Home;
