import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './list.css';

export default function ListCard({ list: { materials, monsters } }) {
  const { url } = useRouteMatch();
  const history = useHistory();

  if (url === '/materials')
    return (
      <div className="list">
        {materials.map((item) => {
          return (
            <div key={item.name}>
              <Link to={`/${item.category}/${item.id}`}>
                <h3 key={item}>{item.name}</h3>
                <img src={item.image} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  else if (url === '/monsters')
    return (
      <div className="list">
        {monsters.map((item) => {
          return (
            <div key={item.name}>
              <Link to={`/${item.category}/${item.id}`}>
                <h3 key={item}>{item.name}</h3>
                <img src={item.image} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  else history.push('/');
}
