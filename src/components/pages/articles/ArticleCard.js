import React from 'react';
import { Link } from '@reach/router';
//import ArticlesList from './ArticlesList';

const ArticleCard = props => {
  const {
    title,
    author,
    body,
    topic,
    comment_count,
    article_id,
    created_at,
    votes
  } = props.article;
  return (
    <section className="row mx-auto mb-5">
      <li className="card bg-light mx-auto" style={{ width: '100rem' }}>
        <Link to={`/articles/${article_id}`}>
          <h3 className="card-title text-white text-uppercase bg-primary active">
            {title}
          </h3>
        </Link>
        <p className="card-title text-uppercase">Author: {author}</p>
        <p className="card-title text-uppercase">Topic: {topic}</p>
        <p className="card-title text-uppercase">
          {' '}
          Comment count: {comment_count}
        </p>
        <p className="card-title text-uppercase">Votes: {votes}</p>
        <p className="card-title text-uppercase">
          Date posted: {created_at.slice(0, 9)}
        </p>
        <p className="card-body text-uppercase">Body: {body}</p>
        <Link
          to={`/articles/${article_id}`}
          className="btn btn-outline-primary text-white text-uppercase bg-primary btn btn-"
        >
          More Info
        </Link>
      </li>
    </section>
  );
};

export default ArticleCard;
