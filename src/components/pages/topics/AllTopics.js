import React, { Component } from 'react';
import { getAllTopics } from '../../api';
import TopicCard from '../topics/TopicCard';
import LoadingSpinner from '../../addedExtras.js/LoadingSpinner';

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
          return <TopicCard topic={topic} key={topic.slug} />;
        })}
      </div>
    );
  }

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
