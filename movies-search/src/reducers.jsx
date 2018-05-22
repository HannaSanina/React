
import { FETCH_SUCCESS, FETCH_ERROR, SORT_MOVIES } from './actions.jsx';
import _ from 'lodash';
import { combineReducers } from 'redux'

const initialState = {
    movies: [],
    errors: null
};


function updateObject(oldObject, newValues) {
     return Object.assign({}, oldObject, newValues);
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return updateObject(state, { movies:  action.data });
        case FETCH_ERROR:
            return updateObject(state, { error: action.error })
        case SORT_MOVIES:
            const sortedArray = _.sortBy(state.movies, action.field)
            return updateObject(state, { movies: sortedArray });
        default:
            return state;
    }
}

export default reducer