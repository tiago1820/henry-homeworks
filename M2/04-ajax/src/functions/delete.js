const friendDeleted = (data) => {
    $('#success').text(`Amigo con id ${requestData.id} borrado con exito.`);
    $('#boton').click();
}

const requestData = {
    id: '',
    type: 'delete',
    url: '',
    success: friendDeleted,
}

export const deleteFriend = () => {
    const id = $('#inputDelete').val();
    requestData.id = id;
    requestData.url = `${BASEURL}/amigos/${id}`;
    $.ajax(requestData)
}