export const handleCharacterData = (data, characters, setCharacters) => {
    if (data.name) {
        const isDuplicate = characters.some(char => char.id === data.id);

        if (!isDuplicate) {
            setCharacters(characters => [...characters, data]);
        } else {
            window.alert("¡El personaje ya está en la lista!");
        }
    } else {
        window.alert("¡No hay personajes con este ID!");
    }
}