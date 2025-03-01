import React, { Component } from 'react';

class Sorter extends Component {
  state = {
    sort_by: 'created_at',
    order: 'desc'
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select
            className="btn btn-primary dropdown-toggle mr-2"
            name="sort_by"
            onChange={this.handleChange}
          >
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <select
            className="btn btn-primary dropdown-toggle"
            name="order"
            onChange={this.handleChange}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          <button className="btn btn-success ml-2">Sort!</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { fetchAllArticles } = this.props;
    const { sort_by, order } = this.state;
    event.preventDefault();
    fetchAllArticles(sort_by, order);
  };
}

export default Sorter;
