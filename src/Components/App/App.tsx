import React, { useState } from 'react';
import BookPage from '../BookPage/BookPage';
import NavBar from '../NavBar/NavBar';
import BookCardContainer from '../BookCardContainer/BookCardContainer';
import BookDetails from '../BookDetails/BookDetails'
import { getBookByCategory, getSingleBook } from '../../apiCalls';
import { Router } from 'react-router-dom';
import './App.css';
import "./library.jpg"
import { stringify } from 'querystring';

const App: React.FC = () => {
  const [books, setBooks] = useState([])
  const [singleBook, setSingleBook] = useState({})

  const retrieveBooks = (category: string) => {
    getBookByCategory(category)
      .then((data: { works: [] }) => setBooks(data.works))
  }

  const retrieveSingleBook = (id: string) => {
    getSingleBook(id)
      .then(data => setSingleBook(data))
  }

  return (
    <div className="backGround">
      <NavBar retrieveBooks={retrieveBooks} />
      <main>
        <h1 className="project-title">A Novel Idea</h1>
        <BookCardContainer allBooks={books} oneBook={retrieveSingleBook}/>
          <BookDetails />
      </main>
    </div>
  )
}

export default App;
