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
      <div className="row mx-auto sitewrapper">
        {topics.map(topic => {
          return (
            <ul
              className=" row card mb-3 mx-auto bg-dark text-white"
              style={{ width: '540px' }}
            >
              <li className="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="https://pbs.twimg.com/profile_images/728482145082073088/lp46310N_400x400.jpg"
                    className="card img-fluid"
                    style={{ height: '10rem' }}
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <Link to={`/topics/${topic.slug}`}>
                      <h5 class="card-title">{topic.slug} Articles</h5>
                    </Link>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            // <div className=" card-forkrow mx-auto" style={{ width: '50rem' }}>
            //   <img
            //     src="https://thumbs.dreamstime.com/t/header-banner-3589701.jpg"
            //     className="card img-fluid"
            //     style={{ height: '10rem' }}
            //     alt="..."
            //   />
            //   <div class="card-body ">
            //     <Link to={`/topics/${topic.slug}`}>
            //       <h5 className="card-title text-uppercase">
            //         {topic.slug} Articles
            //       </h5>
            //     </Link>
            //     <Link to={`/topics/${topic.slug}`}>
            //       <button className="btn btn-primary">View Articles</button>
            //     </Link>
            //   </div>
            // </div>
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
