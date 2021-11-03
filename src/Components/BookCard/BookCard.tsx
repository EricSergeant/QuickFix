import React from 'react';
import './BookCard.css';
import { getIndividualBook } from '../../apiCalls'
interface Props {
  title: string, cover_id: number, key: any, id: any
}

const BookCard: React.FC<Props> = ({ title, cover_id, id }) => {

  // useEffect((id: any) => {
  //   getIndividualBook(id)
  // }, [])

  const fake = (id: any) => {
    getIndividualBook(id) 
  }


  return (
    <div className="book-card-grid">
      <div className="book-card">
        <button onClick={() => fake(id)}>Book Info</button> 
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard;
