const axios = require('axios');

const getCharById = (response, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((result) => result.data)
        .then(({ name, status, species, gender, origin, image }) => {
            let character = {
                id,
                name,
                status,
                species,
                gender,
                origin,
                image
            }
            response.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(character))
        })
        .catch((error) => response.writeHead(500, { "Content-Type": "text/plain" }).end(error.message))
}

module.exports = getCharById