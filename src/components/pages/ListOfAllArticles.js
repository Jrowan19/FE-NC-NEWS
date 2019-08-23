import React, { Component } from 'react';
import LoadingSpinner from '../addedExtras.js/LoadingSpinner';

class ListOfAllArticles extends Component {
  state = {
    articles: [],
    sort_by: 'created_at',
    filterByTopic: '',
    order: 'desc',
    error: null,
    isLoading: true
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <LoadingSpinner />;
    return (
      <div>
        {articles.map(article => {
          return <ul className="containers" key={article.article_id} />;
        })}
      </div>
    );
  }

  //   componentDidMount() {
  //     this.fetchAllArticles();
  //   }
}

export default ListOfAllArticles;
