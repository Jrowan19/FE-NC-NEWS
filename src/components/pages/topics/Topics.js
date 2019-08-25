import React, { Component } from 'react';
import LoadingSpinner from '../../addedExtras.js/LoadingSpinner';
//import ArticleCard from './articles/ArticleCard';
import { Link } from '@reach/router';
import ErrorMsg from '../../ErrorMsg';

class Topics extends Component {
  state = {
    topics: null,
    slug: '',
    description: '',
    isLoading: true,
    error: null
  };

  render() {
    const { articles, isLoading, error } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMsg />;
    return (
      <div className="container">
        <div className="row mt-5" />
        {articles.map(topic => {
          return <Link to={`topics/${topic}`} />;
        })}
      </div>
    );
  }
}

export default Topics;
