import React from 'react';
import './NavBar.css';

const NavBar = () => {

  return (
    <nav className="sidenav">
      <button className="biography">Biography</button>
      <button className="children">Children</button>
      <button className="fiction">Fiction</button>
      <button className="history">History</button>
      <button className="nonfiction">Nonfiction</button>
      <button className="poetry">Poetry</button>
      <button className="romance">Romance</button>
      <button className="self-help">Self-Help</button>
      {/* <button className="submit">Submit</button> */}
    </nav>
  )
}

export default NavBar;
