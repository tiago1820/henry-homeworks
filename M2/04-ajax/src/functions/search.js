const showName = friend => {
    $('#amigo').text(friend.name);
}

export const searchFriend = event => {
    const id = $('#input').val();
    $.get(`${BASE_URL}/amigos/${id}`, showName);
}