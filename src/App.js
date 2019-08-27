import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from '@reach/router';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import ArticlesList from './components/pages/articles/ArticlesList';
import SingleArticle from './components/pages/articles/SingleArticle';
import SignIn from './components/layouts/SignIn';
import AllTopics from './components/pages/topics/AllTopics';
//import TopicCard from './components/pages/topics/TopicCard';
import ArticlesByTopic from './components/pages/articles/ArticlesByTopic';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <SignIn />
      <Router>
        <Home path="/" />
        <ArticlesList path="/articles" />
        <SingleArticle path="/articles/:article_id" />
        <AllTopics path="/topics" />
        <ArticlesByTopic path="/topics/:topic" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
