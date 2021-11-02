import React from 'react';
import './BookCard.css';

const BookCard = () => {

  return (
    <div className="book-card-grid">
      <div className="book-card">
        <div className="book-card-inner">
          <div className="book-card-front">
            <img
              className="book-cover-img"
              src='https://covers.openlibrary.org/b/id/8739161-L.jpg'
              alt='A grinning fox stealing a cooked turkey'
            />
          </div>
          <div className="book-card-back">
            <p>Book Title</p>
            <p>Book Description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard;
