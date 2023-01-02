import './App.scss';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import AddNotePage from './pages/AddNotePage'

function App() {
  return (
    <>
     <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addnote" element={<AddNotePage />} />
            </Routes>
        </Router>

    </>
  );
}

export default App;
