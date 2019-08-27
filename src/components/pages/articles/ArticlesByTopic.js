import React, { Component } from 'react';
import * as api from '../../api';

import LoadingSpinner from '../../addedExtras.js/LoadingSpinner';
import ArticleCard from './ArticleCard';

class ArticlesByTopic extends Component {
  state = {
    articlesByTopic: [],
    isLoading: true
  };

  render() {
    const { isLoading, articlesByTopic } = this.state;
    if (isLoading) return <LoadingSpinner />;
    return (
      <section>
        {articlesByTopic.map(articleByTopic => {
          return (
            <ArticleCard
              key={articleByTopic.article_id}
              article={articleByTopic}
            />
          );
        })}
      </section>
    );
  }

  componentDidMount = () => {
    this.fetchAllArticles();
  };

  componentDidUpdate = prevProps => {
    if (this.props.topic !== prevProps.topic) {
      this.fetchAllArticles();
    }
  };

  fetchAllArticles = () => {
    api.getArticlesWithParams(this.props.topic).then(articles => {
      this.setState({ articlesByTopic: articles, isLoading: false });
    });
  };
}

export default ArticlesByTopic;
