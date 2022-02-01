import React from 'react';
import { Link } from 'react-router-dom';

export default function ListCard({ list: { materials } }) {
  console.log('materials', materials);
  return (
    <div>
      <p>materials</p>
      {materials.map((item) => {
        // id
        // Name
        return (
          <div key={item.name}>
            <Link to={`/materials/${item.id}`}>
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
