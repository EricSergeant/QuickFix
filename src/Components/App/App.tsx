import React, {useState, useEffect} from 'react';
import BookPage from '../BookPage/BookPage';
import NavBar from '../NavBar/NavBar';
import BookCardContainer from '../BookCardContainer/BookCardContainer';
import BookCard from '../BookCard/BookCard';

// import { getBooksByCategory, getSeafood } from './apiCalls';
import { getBookByHistory } from '../../apiCalls';
// import { Route } from 'react-router-dom';
import './App.css';
import "./library.jpg"

const App: React.FC = () => {

  useEffect(() => {
    getBookByHistory()
  }, [])

  return (
    <div className="backGround">
    <NavBar />
    <main>
      <h1>Quick Fix Landing Page</h1>
      <p></p>
      <BookPage />
      <BookCardContainer />
      <BookCard />
    </main>
    </div>
  )
}

export default App;
