import React from 'react';
import BookCard from '../BookCard/BookCard';
import './BookCardContainer.css';

interface Props {
  allBooks: { title: string, cover_id: number}[]
}

const BookCardContainer: React.FC<Props> = ({ allBooks }) => {

  const bookCards = allBooks.map((book) => {
    return (
      <BookCard title={book.title} cover_id={book.cover_id} key={book.title} />
    )
  })
  return (
    <div className="book-card-container">
      {bookCards}
    </div>
  )
}

export default BookCardContainer;
