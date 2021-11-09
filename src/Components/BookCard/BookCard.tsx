import React from 'react';
import './BookCard.scss';
import { Link } from 'react-router-dom';
import { getSingleBook } from '../../apiCalls'

interface Props {
  title: string, cover_id: number, key: string, id: string, authors: [{name: string}]
  // oneBook: Function
}

const BookCard: React.FC<Props> = ({ title, cover_id, id, authors }) => {

  // useEffect(() => {
  //   if (singleBook !== '') {
  //     getSingleBook(id)
  //     .then(data => setSingleBook(data))
  //     // .then(() => console.log(singleBook))
  //     .catch(error => setErrorSingleState(true))
  // }, [id])

  return (
    <Link to={`/books${id}`}>
    {/*<button className="book-card-grid"
    onClick={() =>  oneBook(id)}>*/}
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
    {/*</button>*/}
    </Link>
  )
}

export default BookCard;
