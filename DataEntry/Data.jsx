import axios from 'axios';
import React, { useState } from 'react';
import SERVER_URL from '../serverUrl/Url';
// const SERVER_URL = 'http://localhost:8000';

export default function Data() {
    const [veriEkle, setVeriEkle] = useState({
        Image: '',
        name: '',
        material: [],
        quantity: [],
    });

    const kahveEkle = async () => {
        try {
            await axios.post(`${SERVER_URL}/api/veri`, veriEkle); 
            console.log('Veri Başarıyla Gönderildi');
            setVeriEkle({
                Image: '',
                name: '',
                material: [],
                quantity: [],
            });
        } catch (error) {
            console.error('Veri Gönderme Hatası:', error);
        }
    }

    const handleMaterialChange = (e) => {
        const materials = e.target.value.split(',').map(item => item.trim());
        setVeriEkle({ ...veriEkle, material: materials });//Arasında virgül olacak şekilde veri ekleniyor eklenen veri array olarak kaydediliyor
    }

    const handleQuantityChange = (e) => {
        const quantities = e.target.value.split(',').map(item => parseInt(item.trim(), 10));
        setVeriEkle({ ...veriEkle, quantity: quantities });//Arasında virgül olacak şekilde veri ekleniyor eklenen veri array olarak kaydediliyor
    }

    return (
        <>
            <p>{veriEkle.name} {veriEkle.material} {veriEkle.quantity}</p>

            <label>İsmi gir</label>
            <input type="text" id='name' onChange={(e) => setVeriEkle({ ...veriEkle, name: e.target.value })} />
            <label>Resmin Url Bağlantısını gir</label>
            <input type="text" id='image' onChange={(e) => setVeriEkle({...veriEkle, Image: e.target.value})}/>
            <label>Malzeme gir</label>
            <input type="text" id='material' onChange={handleMaterialChange} />
            <label>Miktar gir</label>
            <input type="text" id='quantity' onChange={handleQuantityChange} />
            <button onClick={kahveEkle}>Gönder</button>
        </>
    );
}

