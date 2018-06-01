import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import {
  reducer,
  movieSaga,
} from './movies';

function* rootSaga() {
  yield all([
    movieSaga(),
  ]);
}

const rootReducer = combineReducers({
  movies: reducer,
});

export {
  rootReducer,
  rootSaga,
};
