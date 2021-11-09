import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import BookCardContainer from '../BookCardContainer/BookCardContainer';
import BookDetails from '../BookDetails/BookDetails';
import Home from '../Home/Home';
import Error from '../Error/Error';
import { getBookByCategory, getSingleBook } from '../../apiCalls';
import { Route, Switch  } from 'react-router-dom';
import './App.css';
import "./library.jpg"

export interface Book {
  title: string;
  description?: string | {type: string, value: string};
  links?: {url: string, title: string, type: string}[];
  covers: number[];
  first_publish_date: string;
  key?: string;
}

const App: React.FC = () => {
  const [books, setBooks] = useState([])
  // const [singleBook, setSingleBook] = useState/*<Book>*/({title: '', description: "" || {type: "", value: ""}, links: [{url: "", title: "", type: ""}], covers: [], first_publish_date: ""
  // })
  const [errorGetCategory, setErrorCategoryState] = useState(false)
  const [errorGetSingle, setErrorSingleState] = useState(false)

  const retrieveBooks = (category: string) => {
    getBookByCategory(category)
      .then((data: { works: [] }) => setBooks(data.works))
      .catch((error) => {
        setErrorCategoryState(true)
        console.log(error)
        }
      )
    }

  // const retrieveSingleBook = (id: string) => {
  //   getSingleBook(id)
  //     .then(data => setSingleBook(data))
  //     .catch((error) => {
  //       setErrorSingleState(true)
  //       console.log(error)
  //       }
  //     )
  //   }



  return (
        <div className="backGround">
          <main>
            <h1 className="project-title">A Novel Idea</h1>
            <Switch>
              <Route
                exact path="/books:id"
                render={({ match }) => {
                  return (
                    <>
                      <BookDetails id={match.params.id}/>
                      <NavBar retrieveBooks={retrieveBooks} error={errorGetCategory}/>
                    </>
                  )
                }}
              />
              <Route exact path='/' render={() => {
                return (
                  <Home retrieveBooks={retrieveBooks} />
                )
            }}
              />


              <Route exact path='/books' render={() => {
                return (
                  <>
                    <BookCardContainer allBooks={books} error={errorGetSingle}/>
                    <NavBar retrieveBooks={retrieveBooks} error={errorGetCategory} />
                  </>
                )
            }}
              />
               <Route path='/error' component={Error}/>
            </Switch>
          </main>
        </div>
  )
}

export default App;
