// const index = 1;
// Se declara una variable llamada "index" y se le asigna un valor inicial de 1. Esta variable se utilizará para realizar solicitudes a diferentes imágenes de la API, incrementándola cada vez que se hace clic en el botón.

// $('.boton').click(function () {
// Se selecciona un elemento HTML con la clase "boton" y se establece un controlador de eventos de clic en él. Esto significa que cuando se haga clic en cualquier elemento con la clase "boton", se ejecutará la función proporcionada.

// $.get("https://jsonplaceholder.typicode.com/photos/" + index, function (data) {
// Dentro de la función de controlador de clic, se realiza una solicitud GET AJAX utilizando la función $.get de jQuery. Esta solicitud se dirige a la API de JSONPlaceholder y se concatena con el valor actual de "index" para obtener una imagen específica de la API. Cuando se complete la solicitud, la función proporcionada como segundo argumento se ejecutará, y la respuesta de la API se pasará como el objeto "data".

// const img = document.createElement('img');
// Se crea un elemento HTML "img" en el DOM utilizando JavaScript puro (vanilla JavaScript). Esta etiqueta de imagen se utilizará para mostrar la imagen recuperada de la API.

// img.src = data.url; 
// Se establece el atributo "src" de la etiqueta de imagen con la URL de la imagen obtenida de la respuesta de la API. Esto cargará la imagen en la página.

// const title = document.createElement('h3');
// Se crea un elemento HTML "h3" para mostrar el título de la imagen.

// title.textContent = data.title;
// Se establece el contenido de texto del elemento "h3" con el título de la imagen obtenido de la respuesta de la API.

// $('#respuesta').append(img);
// Se selecciona un elemento HTML con el ID "respuesta" utilizando jQuery (se supone que existe en tu página) y se agrega la etiqueta de imagen como un hijo de este elemento. Esto insertará la imagen en el DOM de tu página.

// $('#respuesta').append(title);
// De manera similar, se agrega el elemento "h3" con el título como un hijo del elemento con ID "respuesta", mostrando así el título debajo de la imagen.

// index++;
// Finalmente, se incrementa la variable "index" para que la próxima vez que se haga clic en el botón, se solicite la siguiente imagen de la API.

// En resumen, este código permite cargar imágenes y títulos de la API de JSONPlaceholder en tu página web cuando se hace clic en un botón con la clase "boton", y va mostrando una nueva imagen cada vez que se hace clic, gracias al incremento de la variable "index".

const index = 1;
$('.boton').click(function () {
    // GET AJAX
    $.get("https://jsonplaceholder.typicode.com/photos/" + index, function (data) {
        // vanilla javascript
        const img = document.createElement('img');
        img.src = data.url;
        const title = document.createElement('h3');
        title.textContent = data.title;
        $('#respuesta').append(img);
        $('#respuesta').append(title);
        index++;
    });

});