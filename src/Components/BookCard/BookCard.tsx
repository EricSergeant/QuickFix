import React from 'react';
import './BookCard.css';

interface Props {
  title: string, cover_id: number
}

const BookCard: React.FC<Props> = ({ title, cover_id }) => {

  return (
    <div className="book-card-grid">
      <div className="book-card">
        <div className="book-card-inner">
          <div className="book-card-front">
            <img
              className="book-cover-img"
              src={`https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`}
              alt='A grinning fox stealing a cooked turkey'
            />
          </div>
          <div className="book-card-back">
            <p>Book Title: {title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard;
