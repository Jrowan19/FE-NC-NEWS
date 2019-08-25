import axios from 'axios';

const request = axios.create({
  baseURL: 'https://john-rowan-news.herokuapp.com/api/'
});

export const getData = (endpoint, queries) => {
  const URL = `/${endpoint}`;
  return request.get(URL, { params: queries }).then(({ data }) => {
    return data;
  });
};


export const getArticlesWithParams = ({
  sort_by,
  order,
  filterByTopic,
  author
}) => {
  return request
    .get("/articles", {
      params: {
        sort_by: sort_by,
        order: order,
        topic: filterByTopic,
        author: author
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};