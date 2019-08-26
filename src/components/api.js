import axios from 'axios';

const baseURL = 'https://john-rowan-news.herokuapp.com/api/';

export const getData = endpoint => {
  console.log(endpoint);
  return axios.get(`${baseURL}/${endpoint}`).then(({ data }) => {
    return data;
  });
};

export const getAllTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticlesWithParams = ({ sort_by, order, topic, author }) => {
  return axios.get(`${baseURL}/articles`, {
    params: {
      sort_by: sort_by,
      order: order,
      topic: topic,
      author: author
    }.then(({ data: { articles } }) => {
      return articles;
    })
  });
};
