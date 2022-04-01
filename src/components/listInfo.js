import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './list.css';

export default function ListCard({ list: { materials, monsters } }) {
  const { url } = useRouteMatch();
  const location = useLocation();

  if (location.pathname === '/materials')
    return (
      <div className="list">
        {materials.map((item) => {
          return (
            <div key={item.name} aria-label="list-item">
              <Link to={`${url}/${item.id}`}>
                <h3 key={item}>{item.name}</h3>
                <img src={item.image} alt={item.name} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  else if (location.pathname === '/monsters')
    return (
      <div className="list">
        {monsters.map((item) => {
          return (
            <div key={item.name} aria-label="list-item">
              <Link to={`${url}/${item.id}`}>
                <h3 key={item}>{item.name}</h3>
                <img src={item.image} alt={item.name} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  else return <h1>404 Error</h1>;
}
