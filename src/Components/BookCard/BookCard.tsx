import React from 'react';
import './BookCard.css';
import { Link } from 'react-router-dom';
// import { getSingleBook } from '../../apiCalls'

interface Props {
  title: string, cover_id: number, key: any, id: string, authors: any
  oneBook: Function
}

const BookCard: React.FC<Props> = ({ title, cover_id, id, authors, oneBook }) => {

  return (
    <Link to={`bookDetails`}>
    <div className="book-card-grid">
      <div className="book-card">
        {/* <button onClick={() => oneBook(id)}>Book Info</button> */}
        <div className="book-card-inner">
          <div className="book-card-front">
            <img
              className="book-cover-img"
              src={`https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`}
              alt={title}
            />
          </div>
          <div className="book-card-back">
            <p className="book-title">{title}</p>
            <br></br><p>written by</p>
            <p className="book-authors">{authors[0].name}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default BookCard;
