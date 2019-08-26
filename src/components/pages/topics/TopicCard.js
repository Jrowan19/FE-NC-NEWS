import React from 'react';
import { Link } from '@reach/router';
//import ArticlesList from './ArticlesList';
//import ArticleCard from '../articles/ArticleCard';

const TopicCard = props => {
  const { slug, description } = props.topic;
  return (
    <>
      <br />

      <section className="row mb-1 ">
        <li className="card bg-light mx-auto" style={{ width: '50rem' }}>
          <Link to={`/topics/${slug}`}>
            <h2 className="card-title text-white text-uppercase bg-primary active">
              {slug}
            </h2>
          </Link>
          <p className="card-title text-uppercase">
            Description: {description}
          </p>

          <Link
            to={`/topics/${slug}`}
            className="btn btn-outline-primary text-white text-uppercase bg-primary btn btn-"
          >
            Related Articles
          </Link>
        </li>
      </section>
      <br />
    </>
  );
};

export default TopicCard;
