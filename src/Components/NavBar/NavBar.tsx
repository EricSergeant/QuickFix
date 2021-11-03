import React from 'react';
import './NavBar.css';

interface LinkProps {
  retrieveBooks: Function;
}

const NavBar: React.FC<LinkProps> = ({ retrieveBooks }) => {

  return (
    <nav className="sidenav">
      <button className="biography" onClick={() => retrieveBooks("biography")}>Biography</button>
      <button className="children" onClick={() => retrieveBooks("children")}>Children</button>
      <button className="fiction" onClick={() => retrieveBooks("fiction")}>Fiction</button>
      <button className="history" onClick={() => retrieveBooks("history")}>History</button>
      <button className="nonfiction" onClick={() => retrieveBooks("nonfiction")}>Nonfiction</button>
      <button className="poetry" onClick={() => retrieveBooks("poetry")}>Poetry</button>
      <button className="romance" onClick={() => retrieveBooks("romance")}>Romance</button>
      <button className="self-help" onClick={() => retrieveBooks("self-help")}>Self-Help</button>
      {/* <button className="submit">Submit</button> */}
    </nav>
  )
}

export default NavBar;
