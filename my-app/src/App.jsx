import React from 'react';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Localizacao from './components/pages/Localizacao'
import Contato from './components/pages/Contato';

import Container from './components/layout/Container';

const App = () => {

  return(
      <BrowserRouter>

        <div>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/localizacao">Localização</Link>
        </div>

      <Container customClass="min-height">

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes> 
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Routes>
          <Route path="/contato" element={<Contato />} /> 
        </Routes>
        <Routes>
          <Route path="/localizacao" element={<Localizacao />} />
        </Routes>
        
      </Container>

          <p>Footer</p>
      </BrowserRouter>
  );
}

export default App;