import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <div>
      <h1> Choose what you want to learn about</h1>
      <div className="table">
        <Link to="/materials">
          <h1>Materials</h1>
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/chillshroom/image"
            alt="materials"
          />
        </Link>
        <Link to="/monsters">
          <h1>Monsters</h1>
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/silver_lynel/image"
            alt="monster"
          />
        </Link>
      </div>
    </div>
  );
}
