let showFriends = function () {
    $.get("http://localhost:5000/amigos/", function (data) {

        $("#lista").empty();
        data.forEach((amigo) => {
            $("#lista").append('<li>' + amigo.name + ' <button onclick="deleteFriend(' + amigo.id + ')">X</button></li>');
        });
    });
}

$("#boton").click(showFriends);

$('#search').click(function () {
    let id = $('#input').val();

    if (id) {
        $.get('http://localhost:5000/amigos/' + id, function (data) {
            $('#amigo').text(`El amigo ${id} es ${data.name}.`);
            $('#input').val('');
        });
    } else {
        alert('Debe ingresar un id');
        $('#amigo').text('');
    }
});

let deleteFriend = function (idCruz) {
    let id;
    if (typeof idCruz === 'number') {
        id = idCruz;
    } else {
        id = $('#inputDelete').val();
    };

    if (id) {
        $.ajax({
            url: 'http://localhost:5000/amigos/' + id,
            type: 'DELETE',
            success: function () {
                $('#sucess').text('El amigo ' + id + ' fue borrado');
                $('#inputDelete').val('');
                showFriends();
            }
        });

    } else {
        alert("Debe ingresar un id");
    }
}

$('#delete').click(deleteFriend);