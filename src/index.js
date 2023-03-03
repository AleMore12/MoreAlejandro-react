import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactView from './components/Contact/ContacView';
import Navbar from './components/Menu/Navbar';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Pokemons />} />
        <Route exact path="/contact" element={<ContactView />} />
        <Route exact path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    
    </BrowserRouter>
  
  </React.StrictMode>
);

