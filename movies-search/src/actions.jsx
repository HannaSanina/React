export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SORT_MOVIES = 'SORT_MOVIES';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';

export const searchMovies = (query) => (dispatch) => {
    const searchQuery = `${url}/?${query}`;
    return fetch(searchQuery)
        .then(res => res.json())
        .then(
            result => dispatch({ type: FETCH_SUCCESS, data: result.data }),
            error => dispatch({ type: FETCH_ERROR, error: error })
        )
}

export const fetchAllMovies = () => (dispatch) => {
    return fetch(url)
        .then(res => res.json())
        .then(
            result => dispatch({ type: FETCH_SUCCESS, data: result.data }),
            error => dispatch({ type: FETCH_ERROR, error: error })
        )
}

export const getMovieById = (id) => (dispatch) => {
    const searchQuery = `${url}/${id}`;
    return fetch(searchQuery)
        .then(res => res.json())
        .then(
            result => dispatch({ type: FETCH_DETAILS_SUCCESS, data: result }),
            error => dispatch({ type: FETCH_ERROR, error: error })
        )
}

export const url = "http://react-cdp-api.herokuapp.com/movies"