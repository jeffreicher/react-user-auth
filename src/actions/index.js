import types from './types';

export function changeAuth(isAuth) {
    return {
        type: types.CHANGE_AUTH,
        payload: isAuth
    };
};

export function handleInputChange(event) {
    event.preventDefault();
    
    const { name, value } = event.target;

    return {
        type: types.INPUT_CHANGE,
        name: name,
        value: value
    };
};

