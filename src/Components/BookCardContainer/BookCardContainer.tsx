import { useState, useEffect } from 'react'
import BookCard from '../BookCard/BookCard';
import Error from '../Error/Error'
import './BookCardContainer.scss';
import { getBookByCategory } from '../../apiCalls';
import NavBar from '../NavBar/NavBar'

interface Props {
  allBooks: { title: string, cover_id: number, key: string, id: string, authors: [{ name: string; }] }[],
  oneBook: Function,
  error: boolean
}

const BookCardContainer: React.FC<Props> = ({ allBooks, oneBook, error }) => {
  // const [books, setBooks] = useState([])

  const bookCards = allBooks.map((book) => {
    return (
    <BookCard title={book.title} cover_id={book.cover_id} key={book.key} id={book.key} oneBook={oneBook} authors={book.authors} />
    )
  })

  // useEffect(() => {
  //   if (category !== '') {
  //     getBookByCategory(category)
  //     .then((data: { works: [] }) => setBooks(data.works))
  //   }
  // }, [category])

  return (
    <div className="book-card-container">
      {error ? <Error /> : bookCards}
    </div>
  )
}

export default BookCardContainer;
