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

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <SignIn />
      <Router>
        <Home path="/" />
        <ArticlesList path="/articles" />
        <ArticlesList path="/topics/:topic" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
