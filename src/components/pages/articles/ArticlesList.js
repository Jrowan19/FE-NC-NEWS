import React, { Component } from 'react';
import LoadingSpinner from '../../addedExtras.js/LoadingSpinner';
import ArticleCard from './ArticleCard';
import ErrorMsg from '../../ErrorMsg';
import Sorter from '../Sorter';
import * as api from '../../api';
//import * as api from '../../api';
//import ArticleComments from '../singleArticle/ArticlesComments';

class ArticlesList extends Component {
  state = {
    articles: [],
    topic: '',
    sort_by: 'created_at',
    order: 'desc',
    error: null,
    isLoading: true
  };

  render() {
    const { articles, isLoading, error } = this.state;
    if (error) return <ErrorMsg error={error} />;
    if (isLoading) return <LoadingSpinner />;

    return (
      <>
        <h3 className="text-white">Sort those Articles</h3>
        <Sorter fetchAllArticles={this.fetchAllArticles} />

        <div className="container mt-1">
          <div className="row" />
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </div>
      </>
    );
  }

  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = (sort_by, order) => {
    api
      .getArticlesWithParams(null, sort_by, order)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
}

export default ArticlesList;
