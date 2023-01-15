import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
      <nav className='barraNav'>
          <div className='linkContainer'>
            <span className='weatherTitle'>Weather App</span>
            <Link to = "/">
              <span className='weatherLink'>Main</span>
            </Link>
            <Link to = "/About">
              <span className='weatherLink'>About</span>
            </Link>
          </div>
          <div className='bar'><SearchBar></SearchBar></div>
      </nav>
    );
  };

export default Nav;
