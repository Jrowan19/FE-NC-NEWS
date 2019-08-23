import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from '@reach/router';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
