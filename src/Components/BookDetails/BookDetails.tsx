import React from 'react'
import './BookDetails.css'

// interface SingleBookProps {
//   title: string, authors: [], description: string, links: []
// }

// // // // // const shit: React.FC<shitProps> = ({ shit }) => {
//   const BookDetails: React.FC<SingleBookProps> = ({ title, authors, description, links }: SingleBookProps) => {
//   return (
//     <>
//     <h1 className="title">{title}</h1>
//     <h2 className="author">{authors}</h2>
//     <p className="description">{description}</p>
//     <p className="links">{links}</p>
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
    <h1 className="title">Pride & Prejudice</h1>
    <h2 className="author">by Jane Austen</h2>
    <a href="https://wikipedia.com" className="links">Wikipedia</a>
    </div>
    </div>
    
  )
}
export default BookDetails