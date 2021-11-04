import React from 'react'
import './BookDetails.css'
import {Book} from '../App/App'
interface SingleBookProps {
  singleBook: Book
}

  const BookDetails: React.FC<SingleBookProps> = ({ singleBook }: SingleBookProps) => {

  return (
    <div className="book-styling">
      <div className="description-flex">
    <img
      className="book-cover"
      src={`https://covers.openlibrary.org/b/id/${singleBook.covers[0]}-L.jpg`}
    />
    <div className="description-styling">Overview
    <p className="description">{singleBook.description}</p>
    </div>
    </div>
    <div className="book-detail-styling">
    <h1 className="title">{singleBook.title}</h1>
    <h2 className="author">by Jane Austen</h2>
    <a href="https://wikipedia.com" className="links">{singleBook.links}</a>
    </div>
    </div>
    
  )
}
export default BookDetails