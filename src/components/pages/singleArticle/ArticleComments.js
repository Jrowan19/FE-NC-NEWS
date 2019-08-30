import React, { Component } from 'react';
import * as api from '../../api';
import LoadingSpinner from '../../addedExtras.js/LoadingSpinner';
import { Link } from '@reach/router';
import CommentAdder from './CommentAdder';
import Voting from '../Voting';
import ErrorMsg from '../../ErrorMsg';

class ArticleComments extends Component {
  state = {
    comments: null,
    article: null,
    isLoading: true,
    error: null
  };
  render() {
    const { isLoading, comments, article, error } = this.state;
    const { username } = this.props;
    if (error) return <ErrorMsg error={error} />;
    if (article === null) return <LoadingSpinner />;
    if (isLoading) return <LoadingSpinner />;
    return (
      <>
        <br />

        <CommentAdder
          username={this.props.username}
          article_id={this.props.article_id}
          addComment={this.addComment}
        />

        {comments.map(comment => {
          return (
            <section className="row mx-auto mb-5 " key={comment.comment_id}>
              <li className="card bg-dark mx-auto " style={{ width: '50rem' }}>
                <Link to={`/comments/${this.props.article_id}`}>
                  <h3 className="card-title text-white text-uppercase bg-primary active text-white">
                    {comment.author}{' '}
                    {new Date(comment.created_at).toLocaleString()}
                  </h3>
                </Link>
                <p className="card-title text-uppercase text-white" />
                <p className="card-title text-uppercase text-white">
                  {comment.body}
                </p>

                <br />
                <Voting
                  votes={comment.votes}
                  comment_id={comment.comment_id}
                  author={comment.author}
                  username={username}
                />
                <br />

                {username === comment.author && (
                  <button
                    type="button"
                    className="btn btn-danger mx-auto"
                    style={{ width: '10rem' }}
                    onClick={() => {
                      if (
                        window.confirm(
                          'Are you sure you wish to delete this item?'
                        )
                      )
                        this.removeComment(comment.comment_id);
                    }}
                  >
                    {' '}
                    Delete Comment{' '}
                  </button>
                )}
              </li>
            </section>
          );
        })}
      </>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      api.fetchAllComments(this.props.article_id).then(article => {
        this.setState({ article, isLoading: false });
      });
    }
  }
  componentDidMount() {
    api.fetchAllComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  addComment = comment => {
    const { article_id, username } = this.props;
    api.postComment(article_id, comment, { username }).then(newComment => {
      this.setState(({ comments }) => {
        return { comments: [newComment, ...comments] };
      });
    });
  };

  removeComment = comment_id => {
    console.log(comment_id, 'this is me ');
    api.deleteComment(comment_id);
    this.setState(({ comments }) => {
      return {
        comments: comments.filter(comment => comment.comment_id !== comment_id)
      };
    });
  };
}
export default ArticleComments;
