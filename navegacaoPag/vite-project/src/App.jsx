import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Materias from './pages/materias'



function App() {
  return (
    <Router>
      {}
      <Routes>
      {}
        <Route path="/" element={<Home />} />        
       {}
        <Route path="/sobre" element={<Sobre />} /><npbs/>
        {}
        <Route path="/materias" element={<Materias />}/>
      </Routes>
    </Router>
  );
}
export default App;
