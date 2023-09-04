const list = $('#lista');

const createElementItems = friend => {
    list.append(`<li>${friend.name}</li>`);
}

const iterateFriends = friends => {
    friends.forEach(createElementItems)
}

export const showFriends = event => {
    list.empty();
    $.get(`${BASE_URL}/amigos`, iterateFriends);
}