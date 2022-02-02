import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ListCard from '../components/TisisTheBest';
import { apiData } from '../services/route';

export default function CategoryList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const search = location.search;
  const searchList = new URLSearchParams(search);
  const items = searchList.get('itemId');

  useEffect(() => {
    async function getListOfItems() {
      const allItems = await apiData();
      setList(allItems.data);
      setLoading(false);
    }
    getListOfItems();
  }, []);

  function returnHome() {
    history.push('/');
  }

  if (loading) return <p>loading...</p>;

  return (
    <div>
      <div>
        <h2>{items}</h2>
        <ListCard list={list} />
      </div>
      <button onClick={returnHome}>Return home</button>
    </div>
  );
}
