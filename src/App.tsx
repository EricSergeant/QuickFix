import React, {useState, useEffect} from 'react';
import BookPage from './BookPage';
import Nav from './Nav';
import BookCardContainer from './BookCardContainer';
import BookCard from './BookCard';
// import { getBooksByCategory, getSeafood } from './apiCalls';
import { getBookByHistory } from './apiCalls';

const App: React.FC = () => {

  useEffect(() => {
    getBookByHistory()
  }, [])

  return (
    <main>
      <h1>Quick Fix Landing Page</h1>
      <p></p>
      <BookPage />
      <Nav />
      <BookCardContainer />
      <BookCard />
    </main>
  )
}

export default App;
