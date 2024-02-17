import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SERVER_URL from '../serverUrl/Url';
import Swal from 'sweetalert2';
import gif from '../gif/gif1.gif'
import styled from 'styled-components';


const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 20px;
 background-color: #f0f0f0;
`;

const Image = styled.img`
 width: 200px;
 height: 200px;
 margin-bottom: 20px;
`;

const Label = styled.label`
 font-size: 18px;
 margin-bottom: 10px;
 color: black;
`;

const Input = styled.input`
 width: 100%;
 padding: 10px;
 margin-bottom: 20px;
 border-radius: 5px;
 border: 1px solid #ddd;
 color: black;
`;

const Button = styled.button`
 padding: 10px 20px;
 background-color: #007bff;
 color: black;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 &:hover {
  background-color: #0056b3;
 }
`;

const ResultLabel = styled.label`
 font-size: 24px;
 color: black;
`;

const LoaderDiv = styled.div`
 position: fixed;
 top: 50%;
 left: 39%;
 transform: translate(-50%, -50%);
 width: 100px;
 height: 100px;
 z-index: 9999;
 display: ${props => props.pending ? 'block' : 'none'};
`;

export default function IncomingData({ itemId }) {
 const [result, setResult] = useState('');
 const [control, setControl] = useState({
   material: [],
   quantity: [],
 });
 const [selectedItem, setSelectedItem] = useState(null);
 const [pending, setPending] = useState(false)


 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get(`${SERVER_URL}/api/veri`);
       const veri = response.data;
       const selectedItem = veri.find((item) => item._id === itemId);
       setSelectedItem(selectedItem);
     } catch (error) {
       console.error('Hata:', error);
     }
   };

   fetchData();
 }, [itemId]);

 const handleMaterialChange = (e) => {
   const materials = e.target.value.split(',').map((item) => item.trim());
   setControl({ ...control, material: materials });
 };

 const handleQuantityChange = (e) => {
   const quantities = e.target.value.split(',').map((item) => parseInt(item.trim(), 10));
   setControl({ ...control, quantity: quantities });
 };

 const HandleControlButton = async () => {
  if (selectedItem) {
    // Do the control logic with selectedItem
    if (
      selectedItem.material.toString() === control.material.toString() &&
      selectedItem.quantity.toString() === control.quantity.toString()
    ) {
      setPending(true)
      setResult('Doğru');
      // Show gif first
      setTimeout(() => {
        // Show success message after delay
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sonuç Doğru Tebrik ederim :)',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          setPending(false)
        });
      }, 2000); // Delay in milliseconds
    } else {
      setPending(true)
      setResult('Yanlış');
      // Show gif first
      setTimeout(() => {
        // Show error message after delay
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Maalesef sonuç yanlış. Lütfen tekrar dene :(',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          setPending(false)
        });
      }, 2000); // Delay in milliseconds
    }
  } else {
    setPending(true)
    setResult('Ters giden bir şeyler var');
    // Show gif first
    setTimeout(() => {
      // Show error message after delay
      Swal.fire({
        position: 'top-end',
        icon: 'question',
        title: 'Ters giden bir şeyler var. Lütfen daha sonra tekrar dene. :(',
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        setPending(false)
      });
    }, 2000); // Delay in milliseconds
  }
 };

 
 

 return (
   <Container>
     {selectedItem && (
       <>
         <Image src={selectedItem.Image} alt="image" />
         <Label>Malzeme Giriniz</Label>
         <Input type="text" name="malzeme" id="material" onChange={handleMaterialChange} />
         <Label>Miktar Giriniz</Label>
         <Input type="text" name="miktar" id="quantity" onChange={handleQuantityChange} />
         <Button onClick={HandleControlButton} >Denetle</Button>
         {pending && (
            <>
              <LoaderDiv pending={pending}>
                <img src={gif} alt="Loading..." />
              </LoaderDiv>
            </>
          )}
         <ResultLabel>{result}</ResultLabel>
       </>
     )}
   </Container>
 );
}
