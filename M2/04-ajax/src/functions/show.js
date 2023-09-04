const list = $('#lista');

const createElementItems = amigo => {
    list.append(`<li>${amigo.name}</li>`);
}

const iterateFriends = data => {
    data.forEach(createElementItems)
}

export const showFriends = data => {
    list.empty();
    $.get(`${BASEURL}/amigos`, iterateFriends);
}