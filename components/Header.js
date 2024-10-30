import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="/cognidesign.jpg" alt="Kamil Kraciuk" className="profile-image" />
      <h1>Kamil Kraciuk</h1>
      <p>Junior Frontend Developer</p>
    </header>
  );
}

export default Header;
