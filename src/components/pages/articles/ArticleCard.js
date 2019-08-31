import React from 'react';
import { Link } from '@reach/router';

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
    /* <section className="row mx-auto sitewrapper border border-white">
      <li className="card bg-dark mx-auto" style={{ width: '50rem' }}>
        <Link to={`/articles/${article_id}`}>
          <h3 className="card-title text-white text-uppercase bg-primary active">
            {title}
          </h3>
        </Link>
        <p className="card-title text-uppercase text-white">Author: {author}</p>
        <p className="card-title text-uppercase text-white">Topic: {topic}</p>

        <p className="card-title text-uppercase text-white">Votes: {votes}</p>

        <p className="card-title text-uppercase text-white">
          Date Posted: {new Date(created_at).toLocaleString()}
        </p>
        <p className="card-body text-uppercase text-white">Body: {body}</p>
        <p className="card-title text-uppercase text-white ">
          <i className="fas fa-comment-alt text-white" /> {''} {comment_count}
        </p>
        <Link
          to={`/articles/${article_id}`}
          className="btn btn-outline-primary text-white text-uppercase bg-primary btn btn- mx-auto"
          style={{ width: '10rem' }}
        >
          See Article
        </Link>
        <br />
      </li>
    </section> */
  );
};

export default ArticleCard;
