import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchItemDetails } from '../services/route';

export default function DetailCard() {
  const [matDetail, setMatDetail] = useState({});
  const params = useParams();
  console.log('params', params);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const matDetails = await fetchItemDetails(id);
      setMatDetail(matDetails);
    }
    fetchData();
  }, [id]);

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
