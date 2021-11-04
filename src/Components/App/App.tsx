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

const App: React.FC = () => {
  const [books, setBooks] = useState([])
  const [singleBook, setSingleBook] = useState()
  const [errorGetCategory, setErrorCategoryState] = useState(false)
  const [errorGetSingle, setErrorSingleState] = useState(false)

  const retrieveBooks = (category: string) => {
    getBookByCategory(category)
      .then((data: { works: [] }) => setBooks(data.works))
      .catch(error => setErrorCategoryState(true))
  }

  const retrieveSingleBook = (id: string) => {
    getSingleBook(id)
      .then(data => setSingleBook(data))
    //  .then(() => console.log(singleBook))
      .catch(error => setErrorSingleState(true))
  }

  return (
        <div className="backGround">
          <main>
            <h1 className="project-title">A Novel Idea</h1>
            <Route exact path='/'>
              <Home retrieveBooks={retrieveBooks} />
            </Route>
            <Route exact path='/books'>
              <BookCardContainer allBooks={books} oneBook={retrieveSingleBook} error={errorGetSingle}/>
              <NavBar retrieveBooks={retrieveBooks} error={errorGetCategory} />
            </Route>
            <Route exact path='/bookDetails'>
              <BookDetails />
            </Route>
            <Route exact path='/error'>
            {/* error works, not chaing path? */}
              <Error /> 
            </Route>
          </main>
        </div>
  )
}

export default App;
