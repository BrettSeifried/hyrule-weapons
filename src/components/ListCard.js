import React from 'react';
import { Link } from 'react-router-dom';

export default function ListCard({ list: { materials, id } }) {
  console.log('items', materials[0].id);
  return (
    <div>
      <p>materials</p>
      {materials.map((item) => {
        // id
        // Name
        return (
          <div key={item.name}>
            <Link to={`/materials/${materials[0].id}`}>
              <h3 key={item}>{item.name}</h3>;
              <img src={item.image} />;
            </Link>
          </div>
        );
        //cooking_effect
        // description
        // hearts_recovered
      })}
    </div>
  );
}
