import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ListCard({ list: { materials, monsters } }) {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  console.log('url', url);
  console.log('path', path);

  if (url === '/materials')
    return (
      <div>
        <p>materials</p>
        {materials.map((item) => {
          return (
            <div key={item.name}>
              <Link to={`/${item.category}/${item.id}`}>
                <h3 key={item}>{item.name}</h3>;
                <img src={item.image} />;
              </Link>
            </div>
          );
        })}
      </div>
    );
  else if (url === '/monsters')
    return (
      <div>
        <p>materials</p>
        {monsters.map((item) => {
          return (
            <div key={item.name}>
              <Link to={`/${item.category}/${item.id}`}>
                <h3 key={item}>{item.name}</h3>;
                <img src={item.image} />;
              </Link>
            </div>
          );
        })}
      </div>
    );
  else history.push('/');
}
