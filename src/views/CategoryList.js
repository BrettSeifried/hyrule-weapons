import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiData } from '../services/route';

export default function CategoryDetail() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    async function getData() {
      const listData = await apiData();
      setDataList(listData);
    }
    getData();
  }, []);

  return <div>data list</div>;
}
