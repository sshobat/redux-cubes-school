import * as actionTypes from './ActionTypes';

const initialState = {
    name: 'Pera',
    age: 30,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NAME_UPDATE:
            return {
                ...state,
                name: action.name,
            }
        case actionTypes.AGE_UPDATE:
            return {
                ...state,
                age: action.age,
            }
        case actionTypes.AGE_NAME_UPDATE:
            return {
                ...state,
                age: action.age,
                name: action.name,
            }
    }

    return state;
}

export { reducer };