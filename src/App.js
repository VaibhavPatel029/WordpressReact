import React, {useState, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Books from './components/Books';
import BookPage from './components/BookPage';
function App() {
  
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={Books} />
    <Route exact path="/book/:id" component={BookPage} />
      <Books />
    </div>
    </Router>
  );
}

export default App;
