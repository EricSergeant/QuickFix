import React, {useState, useEffect} from 'react';
import BookPage from '../BookPage/BookPage';
import NavBar from '../NavBar/NavBar';
import BookCardContainer from '../BookCardContainer/BookCardContainer';
import BookCard from '../BookCard/BookCard';
// import { getBooksByCategory, getSeafood } from './apiCalls';
import { getBookByHistory } from '../../apiCalls';

const App: React.FC = () => {

  useEffect(() => {
    getBookByHistory()
  }, [])

  return (
    <main>
      <h1>Quick Fix Landing Page</h1>
      <p></p>
      <BookPage />
      <NavBar />
      <BookCardContainer />
      <BookCard />
    </main>
  )
}

export default App;
