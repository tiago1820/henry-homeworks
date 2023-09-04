const showName = (data) => {
    $('#amigo').text(data.name);
}

export const searchFriend = (data) => {
    const id = $('#input').val();
    $.get(`${BASEURL}/amigos/${id}`, showName);
}