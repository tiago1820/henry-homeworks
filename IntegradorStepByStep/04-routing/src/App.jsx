import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { Routes, Route } from 'react-router-dom';
import PATHROUTES from './helpers/PathRoutes.helper.js';
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([]);

   const { HOME, ABOUT, DETAIL } = PATHROUTES;


   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id);
         })
      )
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path={HOME} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={DETAIL} element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
