import React, {useState, useEffect} from 'react';
import BookPage from './Components/BookPage/BookPage';
import Nav from './Components/NavBar/NavBar';
import BookCardContainer from './Components/BookCardContainer/BookCardContainer';
import BookCard from './Components/BookCard/BookCard';
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
    </main>
  )
}

export default App;
