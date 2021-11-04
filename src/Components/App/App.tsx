import React, { useState } from 'react';
import BookPage from '../BookPage/BookPage';
import NavBar from '../NavBar/NavBar';
import BookCardContainer from '../BookCardContainer/BookCardContainer';
import BookDetails from '../BookDetails/BookDetails';
import Home from '../Home/Home';
import Error from '../Error/Error';
import { getBookByCategory, getSingleBook } from '../../apiCalls';
import { Route } from 'react-router-dom';
import './App.css';
import "./library.jpg"
import { stringify } from 'querystring';

export interface Book {
  title: any;
  description: any; 
  authors: any;
  links: any;
  covers: any
}

const App: React.FC = () => {
  const [books, setBooks] = useState([])
  const [singleBook, setSingleBook] = useState<Book>({title: '', description: '', authors: [], links: [], covers: []})

  const retrieveBooks = (category: string) => {
    getBookByCategory(category)
      .then((data: { works: [] }) => setBooks(data.works))
  }

  const retrieveSingleBook = (id: string) => {
    getSingleBook(id)
      .then((data) => setSingleBook(data))
  }

  return (
        <div className="backGround">
          <main>
            <h1 className="project-title">A Novel Idea</h1>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/books'>
              <BookCardContainer allBooks={books} oneBook={retrieveSingleBook} />
              <NavBar retrieveBooks={retrieveBooks} />
            </Route>
            
            <Route
          exact
          path="/bookDetails">
            <BookDetails singleBook={singleBook}/>
            <NavBar retrieveBooks={retrieveBooks} />
            </Route>
            <Route exact path='/error'>
              <Error />
            </Route>
          </main>
        </div>
  )
}

export default App;
