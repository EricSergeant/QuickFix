import React from 'react';
import BookCard from '../BookCard/BookCard';
import './BookCardContainer.css';

interface Props {
  allBooks: { title: string, cover_id: number, key:any, id:string }[],
  oneBook: Function
}

const BookCardContainer: React.FC<Props> = ({ allBooks, oneBook }) => {

  const bookCards = allBooks.map((book) => {
    return (
      <BookCard title={book.title} cover_id={book.cover_id} key={book.key} id={book.key} oneBook={oneBook} />
    )
  })

  return (
    <div className="book-card-container">
      {bookCards}
    </div>
  )
}

export default BookCardContainer;
