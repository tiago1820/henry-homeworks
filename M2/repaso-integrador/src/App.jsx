import { Cards, Nav } from "./components";
import { useState } from "react";
import axios from "axios";
import { handleCharacterData } from "./app.functions";
const App = () => {

	// https://pokeapi.co/api/v2/pokemon-species

	const [characters, setCharacters] = useState([]);

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
			.then(({data}) => {
				console.log("char", data)
				handleCharacterData(data, characters, setCharacters);
			});
	}

	return (
		<div className="container">
			<Nav onSearch={onSearch} getRandomChar={getRandomChar} />
			<Cards characters={characters} onClose={onClose} />
		</div>
	)
}

export default App;