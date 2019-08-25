import React from 'react';

const TopicsCard = ({ slug, description }) => {
  return (
    <article className="row mx-auto mb-5 ">
      <h2>{slug}</h2>
      <p>{description}</p>
    </article>
  );
};

export default TopicsCard;
