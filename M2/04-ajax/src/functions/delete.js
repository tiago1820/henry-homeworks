const friendDeleted = (data) => {
    // The data parameter is optional.
    // The data parameter returns the updated friends list.
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
    requestData.url = `${BASE_URL}/amigos/${id}`;
    $.ajax(requestData)
}