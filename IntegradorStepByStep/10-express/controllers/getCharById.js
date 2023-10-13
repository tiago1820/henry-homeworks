const axios = require('axios');

// const getCharById = (response, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then((result) => result.data)
//         .then(({ name, status, species, gender, origin, image }) => {
//             let character = {
//                 id,
//                 name,
//                 status,
//                 species,
//                 gender,
//                 origin,
//                 image
//             }
//             response.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(character))
//         })
//         .catch((error) => response.writeHead(500, { "Content-Type": "text/plain" }).end(error.message))
// }

// module.exports = getCharById

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const { id } = req.params;
    axios(URL + id)
        .then(({data}) => {
            const { name, status, species, gender, origin, image } = data;
            const character = { id, name, status, species, gender, origin, image };

            return character.name
                ? res.json(character)
                : res.status(404).send("Character not found.");
        })
        .catch((err) => {
            return res.status(500).send(err.message);
        });
};

module.exports = getCharById;





