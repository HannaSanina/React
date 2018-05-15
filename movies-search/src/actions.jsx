export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SORT_MOVIES = 'SORT_MOVIES';

export const searchMovies = (searchTerm, fieldName) => (dispatch) => {
    const searchQuery = `${url}?search=${searchTerm}&searchBy=${fieldName.toLowerCase()}`;
    return fetch(searchQuery)
        .then(res => res.json())
        .then(
            result => dispatch({ type: 'FETCH_SUCCESS', data: result.data }),
            error => dispatch({ type: "FETCH_ERROR", error: error })
        )
}

export const fetchAllMovies = () => (dispatch) => {
    return fetch(url)
        .then(res => res.json())
        .then(
            result => dispatch({ type: 'FETCH_SUCCESS', data: result.data }),
            error => dispatch({ type: "FETCH_ERROR", error: error })
        )
}

export const url = "http://react-cdp-api.herokuapp.com/movies"