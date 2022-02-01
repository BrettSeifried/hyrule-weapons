import React from 'react';

export default function ListCard({ list }) {
  console.log('items', list);
  return (
    <div>
      <p>materials</p>
      {list.map((item) => {
        // id
        // Name
        return <h3 key={item}>{list.name}</h3>;
        //image
        //cooking_effect
        // description
      })}
    </div>
  );
}
