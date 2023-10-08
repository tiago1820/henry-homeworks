export const addFavorite = (state, payload) => {
    const { myFavorites } = state;
    const updatedFavorites = [...myFavorites, payload];
    return {
        ...state,
        myFavorites: updatedFavorites,
        allCharacters: updatedFavorites
    }
};

export const removeFavorite = (state, payload) => {
    let copy2 = state.myFavorites.filter(char => char.id !== Number(payload));
    return {
        ...state,
        myFavorites: copy2
    }
};

export const filterCharacters = (state, payload) => {
    let copy3 = state.allCharacters.filter(char => char.gender === payload);
    return {
        ...state,
        myFavorites: copy3
    }
};

export const orderCharacters = (state, payload) => {
    let copy4 = [...state.allCharacters].sort((a, b) => {
        if (payload === "A") {
            return a.id - b.id
        } else if (payload === "D") {
            return b.id - a.id
        } else {
            return 0;
        }
    });
    return {
        ...state,
        myFavorites: copy4
    }
};

export const showAllCharacters = (state) => {
    return {
        ...state,
        myFavorites: state.allCharacters
    }
};

export const getCharacterDetail = (state, payload) => {
    return {
        ...state,
        characterDetail: payload
    }
};

export const cleanCharacterDetail = (state) => {
    return {
        ...state,
        characterDetail: {}
    }
};