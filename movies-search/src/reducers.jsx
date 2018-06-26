import _ from 'lodash';
import { Map } from 'immutable';
import { FETCH_SUCCESS, FETCH_ERROR, SORT_MOVIES, FETCH_DETAILS_SUCCESS }  from './actions';

const initialState = Map({
  movies: [],
  movieDetails: {},
  errors: null,
});


function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return updateObject(state, { movies: action.data });
    case FETCH_DETAILS_SUCCESS:
      return updateObject(state, { movieDetails: action.data });
    case FETCH_ERROR:
      return updateObject(state, { error: action.error });
    case SORT_MOVIES:
      return updateObject(state, { movies: _.sortBy(state.movies, action.field) });
    default:
      return state;
  }
}

export default reducer;
