//test .... 

import React, { useState } from 'react';
import BookPage from '../BookPage/BookPage';
import NavBar from '../NavBar/NavBar';
import BookCardContainer from '../BookCardContainer/BookCardContainer';
import { getBookByCategory } from '../../apiCalls';
// import { Route } from 'react-router-dom';
import './App.css';
import "./library.jpg"

const App: React.FC = () => {
  const [books, setBooks] = useState([])

  const retrieveBooks = (category: string) => {
    getBookByCategory(category)
      .then((data: { works: [] }) => setBooks(data.works))
  }

// 
  // useEffect(() => {
  //   retrieveBooks()
  // }, [])

  return (
    <div className="backGround">
      <NavBar retrieveBooks={retrieveBooks} />
      <main>
        <h1 className="project-title">A Novel Idea</h1>
        <BookCardContainer allBooks={books} />
      </main>
    </div>
  )
}

export default App;
