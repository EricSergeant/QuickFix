import React from 'react';
import './NavBar.css';

const NavBar = () => {

  return (
    <nav className="sidenav">
      <p className="biography">Biography</p>
      <p className="children">Children</p>
      <p className="fiction">Fiction</p>
      <p className="history">History</p>
      <p className="nonfiction">Nonfiction</p>
      <p className="poetry">Poetry</p>
      <p className="romance">Romance</p>
      <p className="selfHelp">Self-Help</p>
    </nav>
  )
}

export default NavBar;
