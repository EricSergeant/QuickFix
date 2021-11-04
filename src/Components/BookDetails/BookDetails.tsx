import React from 'react'
import './BookDetails.css'

// interface shitProps {
  
//   shit: {title: any, authors: any, description: any, links: any}
// }

// // const shit: React.FC<shitProps> = ({ shit }) => {
//   const BookDetails: React.FC<shitProps> = ({ shit }) => {
//   return (
//     <>
//     <h1 className="title">{shit.title}</h1>
//     <h2 className="author">{shit.authors}</h2>
//     <p className="description">{shit.description}</p>
//     <p className="links">{shit.links}</p>
//     </>
//   )
// } 

const BookDetails = () => {

  return (
    <div className="book-styling">
      <div className="description-flex">
    <img
      className="book-cover"
      src={"https://covers.openlibrary.org/b/id/9277716-L.jpg"}
    />
    <div className="description-styling">Overview
    <p className="description">Pride & Prejudice established the template for an infinity of romance novels, yet no subsequent love story has ever come close to equaling the delights of the original.</p>
    </div>
    </div>
    <div className="book-detail-styling">
    <h1 className="title">Pride and Prejudice</h1>
    <h2 className="author">by Jane Austen</h2>
    <div className="border-bottom"></div>
    <a href="https://wikipedia.com" className="links">Wikipedia</a>
    </div>
    </div>
    
  )
}
export default BookDetails