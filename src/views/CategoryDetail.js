import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { apiData } from '../services/route';

export default function CategoryDetail() {
  const [matDetail, setMatDetail] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const matDetails = await apiData(itemId);
      console.log('matDetails', matDetails);
      setMatDetail(matDetails);
    }
    fetchData();
  }, []);

  const { name, image, description, cooking_effect, hearts_recovered } = matDetail;

  return (
    <div>
      <Link to="/">
        <p>Home</p>
      </Link>
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <p>{description}</p>
        <p>Effect: {cooking_effect}</p>
        <p>Hearts: {hearts_recovered}</p>
      </div>
    </div>
  );
}
