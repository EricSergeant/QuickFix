import React from 'react';
import BookCard from '../BookCard/BookCard';
import './BookCardContainer.css';

interface Props {
  allBooks: { title: string, cover: number, key: string }[]
}

// const BookCardContainer: React.FC<Props> = ({ allBooks }: Props): JSX.Element => {

const BookCardContainer: React.FC<Props> = ({ allBooks }) => {

  const bookCards = allBooks.map((book) => {
    return (
      <BookCard title={book.title} />
    )
  })
  return (
    <div className="book-card-container">
      <p>Test</p>
      {/* <BookCard allBooks={allBooks} /> */}
      {bookCards}
    </div>
  )
}

export default BookCardContainer;


// const UserProfile: FC = ({ user }): JSX.Element => {
//   <>
//     {user.firstName}
//     <br />
//     {user.dob}
//     <br />
//     {user.bio}
//   </>
// };