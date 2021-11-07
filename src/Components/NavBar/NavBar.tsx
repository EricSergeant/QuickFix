import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Error from '../Error/Error'

interface LinkProps {
  retrieveBooks: Function;
  error: boolean
}

const NavBar: React.FC<LinkProps> = ({ retrieveBooks, error }) => {
  let buttons =    
  <Link to="/books">
    <nav className="sidenav">
      
      <button className="biography" onClick={() => retrieveBooks("biography")}>Biography</button>
      <button className="children" onClick={() => retrieveBooks("children")}>Children</button>
      <button className="fiction" onClick={() => retrieveBooks("fiction")}>Fiction</button>
      <button className="history" onClick={() => retrieveBooks("history")}>History</button>
      <button className="nonfiction" onClick={() => retrieveBooks("nonfiction")}>Nonfiction</button>
      <button className="poetry" onClick={() => retrieveBooks("poetry")}>Poetry</button>
      <button className="romance" onClick={() => retrieveBooks("romance")}>Romance</button>
      <button className="self-help" onClick={() => retrieveBooks("self-help")}>Self-Help</button>
      
    </nav>
    </Link>
 

  return (
    <>
    {error ? <> <Error /> {buttons} </> : buttons}
    </>

  )
}

export default NavBar;
