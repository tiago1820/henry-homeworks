import {
    addFavorite,
    removeFavorite,
    filterCharacters,
    orderCharacters,
    showAllCharacters,
    getCharacterDetail,
    cleanCharacterDetail
} from "./reducerFunctions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    characterDetail: {},
}

const rootReducer = (state = initialState, { type, payload }) => {
    const actions = {
        ADD_FAV: () => addFavorite(state, payload),
        REMOVE_FAV: () => removeFavorite(state, payload),
        FILTER: () => filterCharacters(state, payload),
        ORDER: () => orderCharacters(state, payload),
        SHOW_ALL: () => showAllCharacters(state, payload),
        GET_CHARACTER_DETAIL: () => getCharacterDetail(state, payload),
        CLEAN_DETAIL: () => cleanCharacterDetail(state, payload)
    }

    return actions[type] ? actions[type]() : { ...state };
}

export default rootReducer;