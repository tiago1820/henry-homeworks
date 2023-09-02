const baseUrl = 'http://localhost:5000';


// $('#boton').click(() => { 
// Esto establece un manejador de eventos para el evento de clic en el elemento con el ID boton. Cuando se hace clic en ese elemento, se ejecutará la función que viene a continuación entre las llaves {}.

// const list = $('#lista');
//  Aquí se selecciona un elemento con el ID lista y se almacena en una variable llamada list. Presumiblemente, este elemento es una lista (<ul> o <ol>) en la página web.

// list.empty(); 
// Esta línea vacía cualquier contenido que pueda tener el elemento seleccionado con el ID lista. Esto se hace para limpiar la lista antes de agregar nuevos elementos.

// $.get(${baseUrl}/amigos, (data) => {
// Se utiliza la función $.get() de jQuery para realizar una solicitud GET a una URL construida a partir de la variable baseUrl y la ruta "/amigos". La respuesta de esta solicitud se pasa a una función de devolución de llamada que toma un parámetro llamado data. Esta función de devolución de llamada se ejecutará una vez que se haya completado la solicitud GET.

// data.forEach(amigo => {
// Se itera a través de los elementos en el arreglo data utilizando el método forEach(). Presumiblemente, data contiene una lista de objetos amigos.

// list.append(<li>${amigo.name}</li>);
// Para cada amigo en el arreglo data, se crea un nuevo elemento de lista <li> que contiene el nombre del amigo. Este elemento de lista se agrega a la lista seleccionada con el ID lista.

// en resumen, cuando se hace clic en el botón con ID boton, se realiza una solicitud GET a una URL específica, se obtiene una lista de amigos como respuesta y se muestra cada nombre de amigo en una lista en la página web, reemplazando cualquier contenido previo en la lista con ID lista.

$('#boton').click(() => {
    const list = $('#lista');
    list.empty();

    $.get(`${baseUrl}/amigos`, (data) => {
        data.forEach(amigo => {
            list.append(`<li>${amigo.name}</li>`);
        });
    })
})

// $('#search').click(() => {: Esto establece un manejador de eventos para el evento de clic en el elemento con el ID search. Cuando se hace clic en ese elemento, se ejecutará la función que viene a continuación entre las llaves {}.

// let id = $('#input').val();: Aquí se obtiene el valor del elemento de entrada (input) con el ID input y se almacena en la variable id. Presumiblemente, este campo de entrada (<input>) permite al usuario ingresar un ID que se utilizará en una solicitud GET posterior.

// $.get(${baseUrl}/amigos/${id}, (data) => {: Se utiliza la función $.get() de jQuery para realizar una solicitud GET a una URL construida a partir de la variable baseUrl, la ruta "/amigos/" y el valor id que se obtuvo del campo de entrada. Esta solicitud GET está diseñada para buscar información sobre un amigo específico en función del ID proporcionado.

// (data) => {: Una vez que se completa la solicitud GET y se recibe una respuesta (que generalmente es un objeto amigo), se ejecuta una función de devolución de llamada que toma un parámetro llamado data. Esta función de devolución de llamada se encarga de manejar los datos de respuesta.

// $('#amigo').text(data.name);: Dentro de la función de devolución de llamada, se selecciona un elemento con el ID amigo y se establece su texto (text()) en el nombre del amigo que se encuentra en la propiedad name del objeto data. Esto actualiza el contenido del elemento con el nombre del amigo recuperado de la respuesta de la solicitud GET.

$('#search').click(() => {
    const id = $('#input').val();
    $.get(`${baseUrl}/amigos/${id}`, (data) => {
        $('#amigo').text(data.name);
    })
})

// $('#delete').click(() => {
// Esto establece un manejador de eventos para el evento de clic en el elemento con el ID delete. Cuando se hace clic en ese elemento, se ejecutará la función que viene a continuación entre las llaves {}.

// let id = $('#inputDelete').val();
// Aquí se obtiene el valor del elemento de entrada (input) con el ID inputDelete y se almacena en la variable id. Este campo de entrada probablemente permite al usuario ingresar el ID de un amigo que se desea eliminar.

// $.ajax({
// En lugar de utilizar $.get(), esta vez se utiliza $.ajax() para realizar una solicitud HTTP personalizada. Esto permite especificar detalles adicionales de la solicitud, como el método HTTP (en este caso, "delete") y una función de éxito.

// Los métodos HTTP son verbos o acciones que indican qué operación se debe realizar en un recurso en un servidor web.
// GET: Se utiliza para recuperar información o datos de un recurso en el servidor, 
// POST: Se utiliza para enviar datos al servidor para que este cree un nuevo recurso. 
// PUT: Se utiliza para actualizar un recurso existente en el servidor o para crearlo si no existe. 
// DELETE: Se utiliza para eliminar un recurso en el servidor. Indica que el recurso especificado debe ser eliminado.

// type: 'delete',
// Esto establece el método HTTP de la solicitud como "delete". Indica que la solicitud se utiliza para eliminar un recurso en el servidor.

// url: ${baseUrl}/amigos/${id},
// Se establece la URL de la solicitud DELETE. La URL se construye utilizando baseUrl, la ruta "/amigos/", y el valor id que se obtuvo del campo de entrada. Esto indica la ubicación del amigo que se desea eliminar.

// success:(data) => {
// Esta es la función de éxito que se ejecutará cuando la solicitud DELETE sea exitosa. Toma un parámetro llamado data, que podría contener información relacionada con la eliminación del amigo.

// $('#success').text(Amigo con id ${id} borrado con exito.) 
// Dentro de la función de éxito, se selecciona un elemento con el ID success y se establece su texto (text()) en un mensaje que indica que el amigo con el ID especificado ha sido eliminado con éxito. Esto se utiliza para mostrar un mensaje de éxito en la página web.

// $('#boton').click();
// Además de mostrar el mensaje de éxito, esta línea también realiza un clic programático en el elemento con el ID boton. Esto podría usarse para desencadenar alguna otra acción o actualización de la lista de amigos después de eliminar uno.

// En resumen, cuando se hace clic en el elemento con ID delete, se realiza una solicitud DELETE al servidor para eliminar un amigo específico basado en el ID proporcionado por el usuario. Luego, se muestra un mensaje de éxito en la página web, y se realiza un clic programático en el botón con ID boton, que podría tener alguna función adicional relacionada con la eliminación.

// jQuery es una biblioteca de JavaScript ampliamente utilizada que simplifica la manipulación del DOM (Document Object Model) en páginas web y ofrece una variedad de utilidades y funciones para realizar tareas comunes en desarrollo web, como manipulación de elementos HTML, manejo de eventos, peticiones AJAX, animaciones y mucho más.

$('#delete').click(() => {
    const id = $('#inputDelete').val();

    $.ajax({
        type: 'delete',
        url: `${baseUrl}/amigos/${id}`,
        success: (data) => {
            $('#success').text(`Amigo con id ${id} borrado con exito.`)
            $('#boton').click();
        }
    })
});