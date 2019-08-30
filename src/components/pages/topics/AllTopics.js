import React, { Component } from 'react';
import { getAllTopics } from '../../api';

import LoadingSpinner from '../../addedExtras.js/LoadingSpinner';
import { Link } from '@reach/router';

class AllTopics extends Component {
  state = {
    isLoading: true,
    topics: null
  };

  render() {
    const { isLoading, topics } = this.state;
    if (isLoading) return <LoadingSpinner />;
    return (
      <div>
        {topics.map(topic => {
          return (
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <Link to={`/topics/${topic.slug}`}>
                  <h5 class="card-title">Card title</h5>
                </Link>
                <p class="card-text">topic text</p>
                <a href="#" class="btn btn-primary">
                  View Articles
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  // <TopicCard topic={topic} key={topic.slug} />;

  componentDidMount = () => {
    this.fetchAllTopics();
  };

  fetchAllTopics = () => {
    getAllTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  };
}

export default AllTopics;
