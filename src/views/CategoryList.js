import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ListCard from '../components/listCard';
import { apiData } from '../services/route';

export default function CategoryList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const search = location.search;
  const searchList = new URLSearchParams(search);
  console.log('search', search);
  const items = searchList.get('items');

  useEffect(() => {
    async function getListOfItems() {
      const allItems = await apiData();
      console.log('allItems', allItems);
      setList(allItems.data);
      setLoading(false);
    }
    getListOfItems();
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <div>
      <h2>{items}</h2>
      <ListCard list={list} />
    </div>
  );
}
