//Burası vanilla.js. Denemek için yapılmıştır.
import { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert

import images from '../images/OIP.jpg';
import './deneme.css';

export default function Deneme() {
  const [data, setData] = useState('');
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [Quantity1, setQuantity1] = useState('');
  const [Quantity2, setQuantity2] = useState('');
  const [result, setResult] = useState('');
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(!showText);
  };

  const handleControlItem = () => {
    const normalizedData = (data || '').toLowerCase().trim();
    const normalizedData1 = (data1 || '').toLowerCase().trim();
    const normalizedData2 = (data2 || '').toLowerCase().trim();

    const expectedValues = ['kahve', 'süttozu', 'şeker'];

    const isValidInput = (input) => expectedValues.includes(input);

    if (isValidInput(normalizedData) && isValidInput(normalizedData1) && isValidInput(normalizedData2)) {
      // Tüm inputlarda beklendiği gibi değerler varsa doğru sonuç
      const isDataCorrect = Quantity === '5' && normalizedData === 'kahve';
      const isData1Correct = Quantity1 === '2' && normalizedData1 === 'süttozu';
      const isData2Correct = Quantity2 === '3' && normalizedData2 === 'şeker';

      if (isDataCorrect && isData1Correct && isData2Correct) {
        setResult('Doğru');
        // Show success message
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sonuç Doğru Tebrik ederim :)',
          showConfirmButton: false,
          timer: 2000
        });
      } else {
        setResult('Yanlış');
        // Show error message
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Maalesef sonuç yanlış. Lütfen tekrar dene :(',
          showConfirmButton: false,
          timer: 2000
        });
      }
    } else {
      // En az bir input beklenen değerlere uymuyorsa yanlış sonuç
      setResult('Yanlış');
      // Show error message
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Maalesef sonuç yanlış. Lütfen tekrar dene :(',
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  return (
    <>
      <div>
        <button onClick={handleButtonClick}>Nescafe</button>
        {showText && (
          <>
            <img
              src={images}
              alt="Resim"
              style={{ width: '300px', height: '300px' }}
            />
            <label>Nescafe</label>
            <br />
            <input type="text" name='mal1' value={data} onChange={(e) => setData(e.target.value)} />
            <input type="text" name="mal2" value={data1} onChange={(e) => setData1(e.target.value)} />
            <input type="text" name='mal3' value={data2} onChange={(e) => setData2(e.target.value)} />
            <input type="text" name='quantity' value={Quantity} onChange={(e) => setQuantity(e.target.value)} placeholder={`${data}, miktarını giriniz`} />
            <input type="text" name='quantity1' value={Quantity1} onChange={(e) => setQuantity1(e.target.value)} placeholder={`${data1}, miktarını giriniz`} />
            <input type="text" name='quantity2' value={Quantity2} onChange={(e) => setQuantity2(e.target.value)} placeholder={`${data2}, miktarını giriniz`} />
            <button onClick={handleControlItem}>Kontrol Et</button>
            <label>{result}</label>
          </>
        )}
      </div>
    </>
  );
}
