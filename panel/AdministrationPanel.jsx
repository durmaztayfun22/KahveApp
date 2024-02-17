import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Data from "../DataEntry/Data";

export default function AdministrationPanel() {
 let giris1 = 'admin';
 let giris2 = 1234;

 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [control, setControl] = useState(null);
 const [intControl, setIntControl] = useState(null)

 const handleControlSTR = (e) => {
 setControl( e.target.value);
 };

 const handleControlINT = (e) => {
 setIntControl(e.target.value);
 };

 const handleControlButon = () => {
 if (control === giris1 && intControl === giris2) {
 setIsLoggedIn(true);
 window.location.reload();
 }
 }

 return (
 <Router>
     <input type="text" name="str" id="str1" className="str" onChange={handleControlSTR}/>
     <input type="number" name="int" id="int1" className="int" onChange={handleControlINT} />
     <Link to="/admin">
       <button onClick={handleControlButon}>Giriş</button>
     </Link>

     <Routes>
       <Route path="/admin" element={isLoggedIn && <Data />} />
       
     </Routes>
 </Router>
 );

}


