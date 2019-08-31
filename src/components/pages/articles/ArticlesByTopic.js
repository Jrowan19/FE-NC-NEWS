import React, { Component } from 'react';
import * as api from '../../api';
import LoadingSpinner from '../../addedExtras.js/LoadingSpinner';
import ArticleCard from './ArticleCard';
import ErrorMsg from '../../ErrorMsg';

class ArticlesByTopic extends Component {
  state = {
    articlesByTopic: [],
    isLoading: true,
    error: null
  };

  render() {
    const { isLoading, articlesByTopic, error } = this.state;
    if (error) return <ErrorMsg error={error} />;
    if (isLoading) return <LoadingSpinner />;
    return (
      <>
        <br />
        <section className="sitewrapper">
          {articlesByTopic.map(articleByTopic => {
            return (
              <ArticleCard
                key={articleByTopic.article_id}
                article={articleByTopic}
              />
            );
          })}
        </section>
      </>
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
    const { topic, sort_by, order } = this.props;
    api
      .getArticlesWithParams(topic, sort_by, order)
      .then(articles => {
        this.setState({ articlesByTopic: articles, isLoading: false });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
}

export default ArticlesByTopic;
