import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SERVER_URL from '../serverUrl/Url';

export default function DeleteButton() {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');
  
  // State to store the data fetched from the server
  const [data, setData] = useState([]);

  // Fetch data from the server on component mount
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

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle delete button click
  const handleDeleteButton = async () => {
    try {
      // Send a delete request to the server with the input _id
      await axios.delete(`${SERVER_URL}/api/veri/${inputValue}`);
      // Update the data after successful deletion (if needed)
      // Refetch the data or update the state as per your application logic
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  return (
    <>
      <div>
        {/* Input for _id */}
        <input type="text" value={inputValue} onChange={handleInputChange} />
        {/* Button to trigger delete */}
        <button onClick={handleDeleteButton}>Sil</button>
      </div>
    </>
  );
}
