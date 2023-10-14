const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, status, species, gender, origin, image } = (await axios(URL + id)).data;
        const character = { id, name, status, species, gender, origin, image };

        return character.name
            ? res.json(character)
            : res.status(404).send("Character not found.");


    } catch (error) {
        return res.status(500).send(error.message);
    }

};

module.exports = getCharById;




