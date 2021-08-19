import * as ActionTypes from './ActionTypes';

const ageUpdate = (age) => {
    //može i neki kod
    return {
        type: ActionTypes.AGE_UPDATE,
        age: age,
    }
}
//u slučaju async akcije, npr. fetch
export const waitAndUpdateAge = (age) => {
    return dispatch => {
//        setTimeout(() => {
//            dispatch(ageUpdate(age));
//        }, 3000)
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(data => data.json())
        .then(results => {
            console.log(results);
            dispatch(ageUpdate(results.message))
        })
    }
}

export const nameUpdate = (name) => {
    return {
        type: ActionTypes.NAME_UPDATE,
        name: name,
    }
}