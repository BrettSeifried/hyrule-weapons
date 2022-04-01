import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchItemDetails } from '../services/route';
import './detail.css';

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
        <h1>{matDetail.data.name}</h1>
        <img src={matDetail.data.image} alt={name} />
        <h2>Description:</h2>
        <p>{matDetail.data.description}</p>
        <h4>Effect:</h4>
        <p>{matDetail.data.cooking_effect}</p>
        <h4>Hearts:</h4>
        <p>{matDetail.data.hearts_recovered}</p>
      </div>
    </div>
  );
}
