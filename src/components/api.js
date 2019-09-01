import axios from 'axios';

const baseURL = 'https://john-rowan-news.herokuapp.com/api';

export const getData = endpoint => {
  console.log(endpoint);
  return axios.get(`${baseURL}/${endpoint}`).then(({ data }) => {
    return data;
  });
};

export const getAllArticles = (topic, sort_by, order) => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const getAllTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticlesWithParams = (topic, sort_by, order) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic: topic,
        sort_by: sort_by,
        order: order
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchAllComments = article_id => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const getUser = username => {
  return axios.get(`${baseURL}/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const postComment = (article_id, body, { username }) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      body,
      username
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = comment_id => {
  return axios
    .delete(`${baseURL}/comments/${comment_id}`, { comment_id })
    .then(({ data }) => {
      return data.comment;
    });
};

export const updateVotes = (article_id, comment_id, inc_votes) => {
  const URL = article_id
    ? `${baseURL}/articles/${article_id}`
    : `${baseURL}/comments/${comment_id}`;
  return axios.patch(URL, { inc_votes });
};
