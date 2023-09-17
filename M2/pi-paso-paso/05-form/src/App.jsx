import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import PATHROUTES from './helpers/PathRoutes.helper.js';
import axios from 'axios';

function App() {

   const { pathname } = useLocation();
   const { LOGIN, HOME, ABOUT, DETAIL } = PATHROUTES;
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   const EMAIL = 'tiago.zdo@gmail.com';
   const PASSWORD = '123456';


   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path={LOGIN} element={<Form login={login} />} />
            <Route path={HOME} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={DETAIL} element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
