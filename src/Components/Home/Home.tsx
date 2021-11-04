import React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  retrieveBooks: Function;
}

const Home: React.FC<HomeProps> = ({ retrieveBooks }) => {
  const goToBookPage = (id:string) => {
    retrieveBooks(id)
  }

  return (
    <section>
      <h2>Find your next best idea</h2>
      <p>Our goal is to help you select your next best read.</p>
      <p>What genre can we help you find today?</p>
      <div className='genre-button-container'>
        <Link to='/books'>
          <button id='biography' onClick= {(event:any) => goToBookPage(event.target.id)}>Biography</button>
          <button id= 'children' onClick= {(event:any) => goToBookPage(event.target.id)}>Children</button>
          <button id='fiction' onClick= {(event:any) => goToBookPage(event.target.id)}>Fiction</button>
          <button id='history' onClick= {(event:any) => goToBookPage(event.target.id)}>History</button>
          <button id='nonfiction' onClick= {(event:any) => goToBookPage(event.target.id)}>Nonfiction</button>
          <button id='poetry' onClick= {(event:any) => goToBookPage(event.target.id)}>Poetry</button>
          <button id='romance' onClick= {(event:any) => goToBookPage(event.target.id)}>Romance</button>
          <button id='self-help' onClick= {(event:any) => goToBookPage(event.target.id)}>Self-Help</button>
        </Link>
      </div>
    </section>
  )
}

export default Home
