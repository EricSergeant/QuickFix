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
    {typeof singleBook.description === "string" ?  <p className="description">{singleBook.description}</p> : 
    <p className="description">{singleBook.description.value}</p> }
    
    </div>
    </div>
    <div className="book-detail-styling">
    <h1 className="title">{singleBook.title}</h1>
    <h2 className="author">by Jane Austen</h2>
    {singleBook.links ? <a href={singleBook.links[0].url} className="links">Go to link </a> : null }
    
    </div>
    </div>
    
  )
}
export default BookDetails