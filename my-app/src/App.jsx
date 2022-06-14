import React from 'react';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Localizacao from './components/pages/Localizacao'
import Contato from './components/pages/Contato';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = () => {

  return(
      <BrowserRouter>

        <Navbar />

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

        <Footer />
      </BrowserRouter>
  );
}

export default App;