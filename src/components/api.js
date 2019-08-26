import axios from 'axios';

const baseURL = 'https://john-rowan-news.herokuapp.com/api/';

export const getData = endpoint => {
  console.log(endpoint);
  return axios
    .get(`https://john-rowan-news.herokuapp.com/api/${endpoint}`)
    .then(({ data }) => {
      return data;
    });
};

export const getArticles = (topic, sort_by, order) => {
  //   const params = { topic: topic, sort_by: sort_by };
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic,
        sort_by,
        order
      }
    })
    .then(({ data }) => {
      return data;
    });
};
