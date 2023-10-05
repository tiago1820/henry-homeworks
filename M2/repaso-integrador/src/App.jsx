import { Nav, Cards, About, Detail, Error, Form, Favorites } from "./components";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleCharacterData } from "./app.functions";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import PATHROUTES from "./helpers/PathRoutes.helper";
const App = () => {

	const { LOGIN, HOME, ABOUT, DETAIL, FAVORITES, ERROR } = PATHROUTES;
	const [characters, setCharacters] = useState([]);
	const pathname = useLocation();
	const [access, setAccess] = useState(false);
	const navigate = useNavigate();

	const EMAIL = "tiago.zdo@gmail.com";
	const PASSWORD = "123456";

	const login = (userData) => {
		if (userData.password === PASSWORD && userData.email === EMAIL) {
			setAccess(true);
			navigate("/home");
		}
	}

	const logout = () => {
		setAccess(false);
		navigate("/");
	}

	const onSearch = (id) => {
		axios(`https://rickandmortyapi.com/api/character/${id}`)
			.then(({ data }) => {
				handleCharacterData(data, characters, setCharacters);
			});
	}

	const onClose = (id) => {
		setCharacters(
			characters.filter((char) => {
				return char.id !== Number(id);
			})
		)
	}

	const getRandomNumber = () => {
		return Math.floor(Math.random() * 826) + 1;
	}

	const getRandomChar = () => {
		let id;
		const isIdCharacters = (id) => {
			return characters.some(characters => characters.id === id);
		}

		do {
			id = getRandomNumber();
		} while (isIdCharacters(id));

		axios(`https://rickandmortyapi.com/api/character/${id}`)
			.then(({ data }) => {
				handleCharacterData(data, characters, setCharacters);
			});
	}

	useEffect(() => {
		!access && navigate("/");
	}, [access]);


	return (
		<div className="container">
			{pathname !== LOGIN && <Nav onSearch={onSearch} getRandomChar={getRandomChar} logout={logout} />}
			<Routes>
				<Route path={LOGIN} element={<Form login={login} />} />
				<Route path={HOME} element={<Cards characters={characters} onClose={onClose} />} />
				<Route path={ABOUT} element={<About />} />
				<Route path={DETAIL} element={<Detail />} />
				<Route path={FAVORITES} element={<Favorites />} />
				<Route path={ERROR} element={<Error />} />
			</Routes>
		</div>
	)
}

export default App;