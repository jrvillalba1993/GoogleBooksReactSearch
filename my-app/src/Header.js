import React, { Component } from 'react';
import logo from './images/logo.png';

console.log(logo);

const Header = () => {
  return <img src={logo} className="logo" alt="Logo" />;

}

export default Header;


