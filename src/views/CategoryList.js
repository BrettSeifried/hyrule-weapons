import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ListCard from '../components/listCard';
import { apiData } from '../services/route';

export default function CategoryList() {
  const [list, setList] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const search = location.search;
  const searchList = new URLSearchParams(search);
  const items = searchList.get('items');

  useEffect(() => {
    async function getListOfItems() {
      const allItems = await apiData(items);
      setList(allItems);
    }
    getListOfItems();
  }, [items]);

  return (
    <div>
      <h2>{items}</h2>
      <ListCard items={items} />
    </div>
  );
}
