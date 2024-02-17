import { useState } from 'react'

import './App.css'
// import Entry from '../DataEntry/Entry'

import Butons from '../buttons/Butons.'
// import DeleteButton from '../DeleteButton/DeleteButton'
import AdministrationPanel from '../panel/AdministrationPanel'

import styled from 'styled-components';

const Image = styled.img`
 width: 1300px;
 height: 1000px;
 margin-bottom: 20px;
 box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
`;

function App() {


  return (
    <>

    <Image src="https://gcdnb.pbrd.co/images/BTRRRKYmoCFD.jpg?o=1" alt="cofeee" className="myImageStyle" />
      <h1>Coffee App</h1>
      
      <Butons />
      <br />
      <br />
      <br />
      <br />
      


    <AdministrationPanel /> 
    </>
  )
}

export default App
