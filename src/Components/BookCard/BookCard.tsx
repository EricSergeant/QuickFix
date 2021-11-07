import React from 'react';
import './BookCard.scss';
import { Link } from 'react-router-dom';
// import { getSingleBook } from '../../apiCalls'

interface Props {
  title: string, cover_id: number, key: any, id: any, authors: any
  oneBook: Function
}

const BookCard: React.FC<Props> = ({ title, cover_id, id, authors, oneBook }) => {

  // const buildHandleEnterKeyPress = (onClick: any) => ({ onKeyDown }) => {
  //   if (onKeyDown === 'Enter') { 
  //     onClick(); 
  //   }
  // };

  // const keyDownHandler = (event: React.KeyboardEvent<HTMLButtonElement>) => {
  //   if (event.code === "Enter") {
  //     oneBook(id)
  //   }
  // };
  

  return (
    <Link to={`bookDetails`}>
    <button className="book-card-grid" 
    // onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => keyDownHandler(event)} 
    onClick={() =>  oneBook(id)}>
      <div className="book-card">
        <div className="book-card-inner">
          <div className="book-card-front" >
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
    </button>
    </Link>
  )
}

export default BookCard;
