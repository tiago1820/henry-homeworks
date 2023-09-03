// Peticion de tipo GET a /users
// Recibo informacion de usuarios dentro de un array
// Voy a mostrar esta informacion armando una lista de NOMBRES de los usuarios

const USERS_URL = 'https://jsonplaceholder.typicode.com';
const lista = document.querySelector('#lista');

const createListItems = user => {
    const li = document.createElement('li');
    li.innerHTML = user.name;
    lista.appendChild(li);
}

const showUsers = (users) => {
    users.forEach(createListItems);;
}

$.get(`${USERS_URL}/users`, showUsers)

// $.ajax({
//     url: "https://jsonplaceholder.typicode.com",//URL
//     type: "DELETE", //Metodo HTTP
//     success: () => {}, // Callback que se ejecuta cuando termina
// });

// yo quiero hacer una peticion...
// necesito pedirla a una web api que la haga por mi
// quien es esta web api? AJAX => $

 // const lista = $('#lista')[0];
 // lista.append(li);