import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import PATHROUTES from './helpers/PathRoutes.helper.js';
import axios from 'axios';
import Favorites from './components/Favorites/Favorites.jsx';

function App() {

    const { pathname } = useLocation();
    const { LOGIN, HOME, ABOUT, DETAIL, FAVORITES } = PATHROUTES;
    const [characters, setCharacters] = useState([]);
    const [access, setAccess] = useState(false);
    const navigate = useNavigate();

    async function login(userData) {
        try {
            const { email, password } = userData;
            const URL = 'http://localhost:3001/rickandmorty/login/';
            const { data } = await axios(URL + `?email=${email}&password=${password}`);
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        !access && navigate('/');
    }, [access]);

    const onSearch = async (id) => {
        try {
            const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
            } else {
                window.alert('¡No hay personajes con este ID!');
            }

        } catch (error) {
            console.log(error);
        }
    }

    const onClose = (id) => {
        setCharacters(
            characters.filter((char) => {
                return char.id !== id;
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
                <Route path={FAVORITES} element={<Favorites />} />

            </Routes>
        </div>
    );
}

export default App;
