import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchItemDetails } from '../services/route';

export default function DetailCard() {
  const [matDetail, setMatDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const matDetails = await fetchItemDetails(id);
      setMatDetail(matDetails);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) return <p>loading...</p>;

  return (
    <div>
      <Link to="/">
        <p>Home</p>
      </Link>
      <div>
        <h3>{matDetail.data.name}</h3>
        <img src={matDetail.data.image} alt={name} />
        <p>Description: {matDetail.data.description}</p>
        <p>Effect: {matDetail.data.cooking_effect}</p>
        <p>Hearts: {matDetail.data.hearts_recovered}</p>
      </div>
    </div>
  );
}
