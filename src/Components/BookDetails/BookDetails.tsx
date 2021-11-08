import React from 'react'
import './BookDetails.scss'
import {Book} from '../App/App'

interface SingleBookProps {
  singleBook: Book
}

  const BookDetails: React.FC<SingleBookProps> = ({ singleBook }: SingleBookProps) => {

    const handleBadDescriptionData = () => {
      if(typeof singleBook.description === "string") {
        return <p className="description">{singleBook.description}</p>
      } else if (typeof singleBook.description !== "string") {
        if(!singleBook.description) {
          return <p className="description">We're sorry. There is no description for this book</p>
        } else {
          return <p className="description">{singleBook.description.value}</p>
        }
      }
    }

  return (
    <div className="book-styling">
      {/* <div className="description-flex">
        <img
          className="book-cover"
          src={`https://covers.openlibrary.org/b/id/${singleBook.covers[0]}-L.jpg`}
        />
        <div className="description-styling">Overview
//           {/*typeof singleBook.description === "string" ?  <p className="description">{singleBook.description}</p> : 
//           <p className="description">{singleBook.description.value}</p> */}
          {handleBadDescriptionData()}
        </div>
      </div>
      <div className="book-detail-styling">
        <h1 className="title">{singleBook.title}</h1>
        <h2 className="author">by Jane Austen</h2>
        {singleBook.links ? <a href={singleBook.links[0].url} className="links">Go to link </a> : null }
        
      </div> */}
     <div className="description-flex">
        <img
          className="book-cover"
          src={`https://covers.openlibrary.org/b/id/${singleBook.covers[0]}-L.jpg`}
        />
        <div className="book-detail-styling">
          <h1 className="title">{singleBook.title}</h1>
          <h2 className="author">by Jane Austen</h2>
          <h3 className="publish-date">{singleBook.first_publish_date}</h3>
          {singleBook.links ? <a href={singleBook.links[0].url} className="links">Links outside of A Novel Idea </a> : null }
        </div>
    </div>

    <div className="description-styling">Overview
      {typeof singleBook.description === "string" ?  <p className="description">{singleBook.description}</p> : 
      <p className="description">{singleBook.description.value}</p> }
    </div>
      
    </div>
    

  )
}

export default BookDetails

