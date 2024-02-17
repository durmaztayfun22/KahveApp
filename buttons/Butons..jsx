import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SERVER_URL from '../serverUrl/Url';
import IncomingData from '../incomingData/IncomingData';
// const SERVER_URL = 'http://localhost:8000';

export default function Butons() {
  const [data, setData] = useState([]);
  const [showText, setShowText] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/veri`);
        const veri = response.data;
        setData(veri);
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (itemId) => {
    setShowText(!showText);
    setSelectedItemId(itemId);
  };

  return (
    <>
      <div>
        {data.map((item) => (
          <div key={item._id}>
            <button key={item._id} onClick={() => handleButtonClick(item._id)}>
              {item.name}
            </button>
            {showText && selectedItemId === item._id && <IncomingData itemId={selectedItemId} />}
          </div>
        ))}
      </div>
    </>
  );
}