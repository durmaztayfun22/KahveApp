import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Data from './Data';

export default function Entry() {
    return (
        <>
            <Router>
                <Link to="/veri-ekle">
                    <button>Veri Ekle</button>
                </Link>

                <Routes>
                    <Route path="/veri-ekle" element={<Data />} />
                </Routes>
            </Router>
        </>
    );
}
