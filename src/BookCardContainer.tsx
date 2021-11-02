import React from 'react';
import BookCard from './Components/BookCard/BookCard';
import './BookCardContainer/BookCardContainer.css';

const BookCardContainer = () => {

  return (
    <h4 className="book-card-container">
      <BookCard />
    </h4>
  )
}

export default BookCardContainer;
