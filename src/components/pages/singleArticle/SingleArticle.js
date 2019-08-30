import React, { Component } from 'react';
import * as api from '../../api';
import { Link } from '@reach/router';
import LoadingSpinner from '../../addedExtras.js/LoadingSpinner';
import ErrorMsg from '../../ErrorMsg';
import Voting from '../Voting';

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
    error: null
  };

  render() {
    const { isLoading, article, error } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMsg error={error} />;

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
            <li className="card bg-dark mx-auto" style={{ width: '70rem' }}>
              <Link to={`/articles/${article_id}`}>
                <h3 className="card-title text-white text-uppercase bg-primary active">
                  {title}
                </h3>
              </Link>
              <p className="card-title text-uppercase text-white">
                Author: {author}
              </p>
              <p className="card-title text-uppercase text-white" />
              <p className="card-title text-uppercase text-white">
                Topic: {topic}
              </p>
              <p className="card-title text-uppercase text-white">
                Comment count: {comment_count}
              </p>

              <p className="card-title text-uppercase text-white">
                Date posted: {created_at.slice(0, 9)}
              </p>
              <p className="card-body text-uppercase text-white">
                Body: {body}
              </p>
              <Voting
                // the colours cahnged in the voting its self
                votes={votes}
                article_id={article_id}
                username={this.props.username}
              >
                Votes {votes}{' '}
              </Voting>
              <br />

              <Link
                className="btn btn-outline-primary text-white text-uppercase bg-primary btn btn"
                to={`/comments/${article_id}`}
              >
                See Comments
              </Link>
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
