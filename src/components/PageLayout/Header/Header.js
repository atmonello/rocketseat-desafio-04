import React from 'react';
import './Header.css';
import Facebook from '../../../assets/facebook-1.png';

function Header() {
  return (
    <header id="layout-header">
      <img className="header-logo" src={Facebook} />
      <a className="header-profile" href="#">Meu perfil</a>
    </header>
  );
}

export default Header;