import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = props => {
  const {
    title,
    author,
    topic,
    comment_count,
    article_id,
    created_at,
    votes
  } = props.article;
  return (
    <section className="row mx-auto">
      <div
        className=" bg-dark card mx-auto border border-white mb-4"
        style={{ width: '45rem' }}
      >
        <img
          className=" card img-fluid "
          src="https://storage.needpix.com/rsynced_images/banner-header-tapete-1463483351bhS.jpg"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-white text-uppercase bg-primary active">
            {title}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush mx-auto">
          <p className="card-title text-uppercase text-white">
            Author: {author}
          </p>
          <p className="card-title text-uppercase text-white">Topic: {topic}</p>
          <p className="card-title text-uppercase text-white">Votes: {votes}</p>
          <p className="card-title text-uppercase text-white">
            Date Posted: {new Date(created_at).toLocaleString()}
          </p>
          <p className="card-title text-uppercase text-white ">
            <i className="fas fa-comment-alt text-white" /> {''} {comment_count}
          </p>
        </ul>
        <div className="card-body">
          <Link to={`/articles/${article_id}`} className="card-link">
            View Article
          </Link>
          <Link to={`/comments/${article_id}`} className="card-link">
            See Comments
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
