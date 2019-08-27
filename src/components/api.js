import axios from 'axios';

const baseURL = 'https://john-rowan-news.herokuapp.com/api/';

export const getData = endpoint => {
  console.log(endpoint);
  return axios.get(`${baseURL}/${endpoint}`).then(({ data }) => {
    return data;
  });
};

export const getAllArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const getAllTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticlesWithParams = topic => {
  console.log(topic);
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic: topic
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};
