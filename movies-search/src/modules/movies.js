import { call, put, all, takeLatest } from 'redux-saga/effects';

//Actions
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SORT_MOVIES = 'SORT_MOVIES';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const START_SEARCH ='START_SEARCH';

export const searchMovies = query => ({ type: START_SEARCH, query: query });
export const getMovieById = id => ({ type: FETCH_DETAILS_SUCCESS, data: result });
export const updateMovies = movies => ({ type: FETCH_SUCCESS, movies: movies });

export const url = "http://react-cdp-api.herokuapp.com/movies"

// Sagas
export function* getMovieByIdAsync(action) {
  const response = yield call(fetch, `${url}/?${action.data}`);
  const movies = yield response.json();
}

export function* watchGetMovieById() {
  yield takeLatest(FETCH_DETAILS_SUCCESS, getMovieByIdAsync);
}

export function* searchMoviesAsync(action) {
  const searchQuery = action.query ? `${url}/?${action.query}` : url;
  const response = yield call(fetch, searchQuery);
  debugger;
  const movies = yield response.json();

  yield put(updateMovies(movies))
}

export function* watchSearchMovies() {
  yield takeLatest(FETCH_SUCCESS, searchMoviesAsync);
}

export function* movieSaga() {
  yield all([
    watchGetMovieById(),
    watchSearchMovies(),
  ]);
}

const initialState = {
  movies: [],
  movieDetails: {},
  errors: null,
  query: null
};

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_SEARCH:
      return updateObject(state, { query: action.query })
    case FETCH_SUCCESS:
      return updateObject(state, { movies: action.movies });
    case FETCH_DETAILS_SUCCESS:
      return updateObject(state, { movieDetails: action.data });
    case FETCH_ERROR:
      return updateObject(state, { error: action.error })
    case SORT_MOVIES:
      const sortedArray = _.sortBy(state.movies, action.field)
      return updateObject(state, { movies: sortedArray });
    default:
      return state;
  }
}
