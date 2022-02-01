import React from 'react';
import { Link } from 'react-router-dom';

export default function ListCard({ list: { materials, id } }) {
  console.log('items', materials);
  return (
    <div>
      <p>materials</p>
      {materials.map((item) => {
        // id
        // Name
        return (
          <div key={item.name}>
            <Link to={`/materials/${id}`}>
              <h3 key={item}>{item.name}</h3>;
              <img src={item.image} />;
            </Link>
          </div>
        );
        //cooking_effect
        // description
      })}
    </div>
  );
}
