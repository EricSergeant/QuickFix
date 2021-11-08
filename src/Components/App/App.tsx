import React, { useState } from 'react';
import BookPage from '../BookPage/BookPage';
import NavBar from '../NavBar/NavBar';
import BookCardContainer from '../BookCardContainer/BookCardContainer';
import BookDetails from '../BookDetails/BookDetails';
import Home from '../Home/Home';
import Error from '../Error/Error';
import { getBookByCategory, getSingleBook } from '../../apiCalls';
import { Route, Switch  } from 'react-router-dom';
import './App.css';
import "./library.jpg"
import { stringify } from 'querystring';

export interface Book {
  title: string;
  description: any;
  authors: any;
  links: any;
  covers: any
  first_publish_date: string
}

const App: React.FC = () => {
  const [books, setBooks] = useState([])
  const [singleBook, setSingleBook] = useState<Book>({title: '', description: "" || {type: "", value: ""}, authors: [{author: {key: ""}, type: {key: ""}}], links: [{url: "", title: "", type: ""}], covers: [], first_publish_date: ""
  })
  const [errorGetCategory, setErrorCategoryState] = useState(false)
  const [errorGetSingle, setErrorSingleState] = useState(false)

  const retrieveBooks = (category: string) => {
    getBookByCategory(category)
      .then((data: { works: [] }) => setBooks(data.works))
      .catch(error => setErrorCategoryState(true))
  }

  const retrieveSingleBook = (id: any) => {
    getSingleBook(id)
      .then(data => setSingleBook(data))
      // .then(() => console.log(singleBook))
      .catch(error => setErrorSingleState(true))
  }

  return (
        <div className="backGround">
          <main>
            <h1 className="project-title">A Novel Idea</h1>
            <Switch>
              <Route exact path='/'>
                <Home retrieveBooks={retrieveBooks} />
              </Route>
              <Route path='/books'>
                <BookCardContainer allBooks={books} oneBook={retrieveSingleBook} error={errorGetSingle}/>
                <NavBar retrieveBooks={retrieveBooks} error={errorGetCategory} />
              </Route>
              <Route path="/bookDetails">
              <BookDetails singleBook={singleBook}/>
              <NavBar retrieveBooks={retrieveBooks} error={errorGetCategory}/>
              </Route>
              <Route path='/error'>
              {/* error works, not chaing path? */}
                <Error />
              </Route>
            </Switch>
          </main>
        </div>
  )
}

export default App;
