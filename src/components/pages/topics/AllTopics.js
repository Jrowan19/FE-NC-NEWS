import React, { Component } from 'react';
import * as api from '../../api';
import LoadingSpinner from '../../addedExtras.js/LoadingSpinner';
import { Link } from '@reach/router';
import ErrorMsg from '../../ErrorMsg';

class AllTopics extends Component {
  state = {
    isLoading: true,
    topics: null,
    error: null
  };

  render() {
    const { isLoading, topics, error } = this.state;
    if (error) return <ErrorMsg error={error} />;
    if (isLoading) return <LoadingSpinner />;
    return (
      <div>
        {topics.map(topic => {
          return (
            <div
              className="card mx-auto bg-dark mb-5 mt-3"
              style={{ width: '50rem' }}
            >
              <img
                src="https://thumbs.dreamstime.com/t/header-banner-3589701.jpg"
                className="card-img-top"
                style={({ width: '50rem' }, { height: '10rem' })}
                alt="..."
              />
              <div class="card-body">
                <Link to={`/topics/${topic.slug}`}>
                  <h5 className="card-title text-uppercase">
                    {topic.slug} Articles
                  </h5>
                </Link>
                <Link to={`/topics/${topic.slug}`}>
                  <button className="btn btn-primary">View Articles</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchAllTopics();
  };

  fetchAllTopics = () => {
    api
      .getAllTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
}

export default AllTopics;
