import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from '@reach/router';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import ArticlesList from './components/pages/articles/ArticlesList';
import SingleArticle from './components/pages/singleArticle/SingleArticle';
import AllTopics from './components/pages/topics/AllTopics';
import ArticlesByTopic from './components/pages/articles/ArticlesByTopic';
import ArticleComments from './components/pages/singleArticle/ArticleComments';
import UsersPage from './components/pages/users/UsersPage';

class App extends Component {
  state = {
    username: 'jessjelly'
  };

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <br />

        <Navbar username={username} handleUserChange={this.handleUserChange} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Router>
          <Home path="/" />
          <ArticlesList path="/articles" />
          <UsersPage path="/users/:username" />
          <SingleArticle path="/articles/:article_id" username={username} />
          <AllTopics path="/topics" />
          <ArticlesByTopic path="/topics/:topic" />
          <ArticleComments path="/comments/:article_id" username={username} />
          <ArticleComments path="/comments/:comment_id" username={username} />
          <UsersPage path="users/:username" />
        </Router>
        <Footer />
      </div>
    );
  }
  handleUserChange = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };
}

export default App;
