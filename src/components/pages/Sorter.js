import React, { Component } from 'react';
import * as api from '../api';

class Sorter extends Component {
  state = {
    sort_by: 'votes',
    order: 'desc'
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleChange}>
          <option value="votes">votes</option>
        </select>
        <button>Sorter</button>
      </form>
    );
  }
  handleChange = e => {
    this.setState({ sort_by: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { sort_by, order } = this.state;
    this.props.fetchAllArticles(sort_by, order);
  };

  fetchAllArticles = () => {
    api
      .getArticlesWithParams(this.props.sort_by, this.props.order)
      .then(articles => {
        // access to articles to set the state
        this.setState({ Sorter: articles, isLoading: false });
      });
  };
}

export default Sorter;
