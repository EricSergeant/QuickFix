import React from 'react';
import BookCard from '../BookCard/BookCard';
import './BookCardContainer.css';

interface Props {
  allBooks: {title: string, cover: number, key: string}[]
}

const BookCardContainer = ({ allBooks }: Props) => {

  return (
    <div className="book-card-container">
      <p>Test</p>
      <BookCard />
    </div>
  )
}

export default BookCardContainer;
