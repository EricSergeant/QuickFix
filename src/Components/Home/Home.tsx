import React from 'react';

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
        <button id='biography' onClick= {(event:any) => goToBookPage(event.target.id)}>Biography</button>
        <button id= 'children' onClick= {() => {retrieveBooks('children')}}>Children</button>
        <button id='fiction' onClick= {() => {retrieveBooks('fiction')}}>Fiction</button>
        <button id='history' onClick= {() => {retrieveBooks('history')}}>History</button>
        <button id='nonfiction' onClick= {() => {retrieveBooks('nonfiction')}}>Nonfiction</button>
        <button id='poetry' onClick= {() => {retrieveBooks('poetry')}}>Poetry</button>
        <button id='romance' onClick= {() => {retrieveBooks('romance')}}>Romance</button>
        <button id='self-help' onClick= {() => {retrieveBooks('self-help')}}>Self-Help</button>
      </div>
    </section>
  )
}

export default Home
