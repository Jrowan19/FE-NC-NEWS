import React, { Component } from 'react';
import LoadingSpinner from '../../addedExtras.js/LoadingSpinner';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import ErrorMsg from '../../ErrorMsg';
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
    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMsg />;

    return (
      <>
        <br />

        <div className="container">
          <div className="row mt-5" />
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

  fetchAllArticles = () => {
    let url = 'https://john-rowan-news.herokuapp.com/api/articles';
    axios
      .get(url)
      .then(({ data }) =>
        this.setState({ articles: data.articles, isLoading: false })
      );
  };

  
}

export default ArticlesList;
