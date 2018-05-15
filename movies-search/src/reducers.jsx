
import { FETCH_SUCCESS, FETCH_ERROR, SORT_MOVIES } from './actions.jsx';
import _ from 'lodash';

export default function reducer(state = [], action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.data;
        case FETCH_ERROR:
            return action.error;
        case SORT_MOVIES:
            return _.sortBy(state, action.field);
        default:
            return state;
    }
}
