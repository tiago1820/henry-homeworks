export const addFav = (character) => {
    return {
        type: "ADD_FAV",
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: "REMOVE_FAV",
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: "FILTER",
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: "ORDER",
        payload: order
    }
}

export const showAllcharacters = () => {
    return {
        type: "SHOW_ALL",
    }
}

export const getCharacterDetail = (id) => {

    return function (dispatch) {
        fetch(`http://localhost:5000/rickandmorty/character/${id}`
        )
            .then((response) => response.json())
            .then(data => {
                dispatch({ type: "GET_CHARACTER_DETAIL", payload: data })
                console.log("Character detail:", data);
            })
    }
}

export const cleanDetail = () => {
    return { type: "CLEAN_DETAIL" };
}