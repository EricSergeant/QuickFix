import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

interface HomeProps {
  retrieveBooks: Function;
}

const Home: React.FC<HomeProps> = ({ retrieveBooks }) => {
  const goToBookPage = (id:string) => {
    retrieveBooks(id)
  }

  return (
    <section className='home-page'>
      <p className='slogan'>Find your next best idea</p>
      <p className='goal'>Our goal is to help you select your next best read.</p>
      <p className='getting-started-prompt'>What genre can we help you find today?</p>
      <div className='genre-button-container'>
        <Link to='/books'>
          <button className= 'home-page-btn' id='biography' onClick= {(event:any) => goToBookPage(event.target.id)}>Biography</button>
          <button className= 'home-page-btn' id= 'children' onClick= {(event:any) => goToBookPage(event.target.id)}>Children</button>
          <button className= 'home-page-btn' id='fiction' onClick= {(event:any) => goToBookPage(event.target.id)}>Fiction</button>
          <button className= 'home-page-btn' id='history' onClick= {(event:any) => goToBookPage(event.target.id)}>History</button>
          <button className= 'home-page-btn' id='nonfiction' onClick= {(event:any) => goToBookPage(event.target.id)}>Nonfiction</button>
          <button className= 'home-page-btn' id='poetry' onClick= {(event:any) => goToBookPage(event.target.id)}>Poetry</button>
          <button className= 'home-page-btn' id='romance' onClick= {(event:any) => goToBookPage(event.target.id)}>Romance</button>
          <button className= 'home-page-btn' id='self-help' onClick= {(event:any) => goToBookPage(event.target.id)}>Self-Help</button>
        </Link>
      </div>
    </section>
  )
}

export default Home
