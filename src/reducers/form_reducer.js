import types from '../actions/types';

const DEFAULT_STATE = {
    values: {}
};

export default (state = DEFAULT_STATE, action) => {
    console.log('Form State:', state);
    switch(action.type) {
        case types.INPUT_CHANGE:
            return {...state, values: {...state.values, [action.name]: action.value}};
        default: 
            return state;
    };
};