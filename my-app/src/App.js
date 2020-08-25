import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';
import logo from './logo.svg';
import './App.css';
import wallpaper from  './images/white_leather.png';

class App extends Component {
  render() {
    return (
      <div className="App" styles={{ backgroundImage:`url(${wallpaper})`}}>
        <Header />
        <Books />
        
      </div>


    );
  }
  
}

export default App;
