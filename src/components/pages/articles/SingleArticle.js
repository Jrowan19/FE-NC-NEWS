import React, { Component } from 'react';
import * as api from '../../api';
import { Link } from '@reach/router';
import LoadingSpinner from '../../addedExtras.js/LoadingSpinner';
import ErrorMsg from '../../ErrorMsg';

class SingleArticle extends Component {
  state = {
    article: null,
    isLoading: true,
    error: null
  };

  render() {
    const { isLoading, article, error } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMsg />;

    const {
      author,
      body,
      comment_count,
      created_at,
      title,
      topic,
      votes,
      article_id
    } = article;

    return (
      <>
        <br />
        <br />
        <br />
        <br />

        <article>
          <section className="row mx-auto mb-5 ">
            <li className="card bg-light mx-auto" style={{ width: '70rem' }}>
              <Link to={`/articles/${article_id}`}>
                <h3 className="card-title text-white text-uppercase bg-primary active">
                  {title}
                </h3>
              </Link>
              <p className="card-title text-uppercase">Author: {author}</p>
              <p className="card-title text-uppercase">Votes: {votes}</p>
              <p className="card-title text-uppercase">Topic: {topic}</p>
              <p className="card-title text-uppercase">
                Comment count: {comment_count}
              </p>
              <p className="card-title text-uppercase">Votes: {votes}</p>
              <p className="card-title text-uppercase">
                Date posted: {created_at.slice(0, 9)}
              </p>
              <p className="card-body text-uppercase">Body: {body}</p>
            </li>
          </section>
        </article>
      </>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle() {
    api
      .getData(`articles/${this.props.article_id}`)
      .then(({ article }) => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response: { data: { message }, status } }) => {
        this.setState({
          error: { message, status },
          isLoading: false
        });
      });
  }
  
}

export default SingleArticle;
