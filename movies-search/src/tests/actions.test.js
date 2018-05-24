import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchAllMovies, searchMovies, FETCH_START, FETCH_SUCCESS, url } from '../actions.jsx';
import fetchMock from 'fetch-mock';
import reducer from '../reducers.jsx';
import _ from 'lodash';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates FETCH_SUCCESS when fetching finished', () => {
        fetchMock
            .getOnce(url, { data: movieDetails, headers: { 'content-type': 'application/json' } });
        const expectedActions = [{ type: FETCH_SUCCESS, data: movieDetails }];

        const store = mockStore({ data: [] })
        return store.dispatch(fetchAllMovies()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('return search results (by title)', () => {
        const searchUrl = `${url}?search=Title&searchBy=title`
        fetchMock
            .getOnce(searchUrl, { data: movieDetails[0], headers: { 'content-type': 'application/json' } });
        const expectedActions =[{ type: FETCH_SUCCESS, data: movieDetails[0] }]

        const store = mockStore({ data: [] })
        return store.dispatch(searchMovies('Title', 'title')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});

describe('reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, [])).toEqual([])
    });

    it('should handle FETCH_SUCCESS', () => {
        expect(reducer(movieDetails, { type: 'FETCH_SUCCESS', data: movieDetails }))
            .toEqual(movieDetails)
    });
});

const movieDetails = [
    {
        "id": 0,
        "picture": "https://imgc.allpostersimages.com/img/posters/titanic_u-L-F4S6CQ0.jpg?src=gp&w=300&h=375",
        "title": "Title",
        "about": "Fugiat velit commodo sint sit occaecat consequat magna nulla cupidatat incididunt magna. Veniam aliquip fugiat minim nulla incididunt aliqua dolore proident pariatur excepteur. Sunt pariatur enim minim magna. Do id dolor sint labore sint do eiusmod est et do ullamco aliquip.",
        "releaseDate": "January 6, 2014"
    },
    {
        "id": 0,
        "picture": "https://imgc.allpostersimages.com/img/posters/titanic_u-L-F4S6CQ0.jpg?src=gp&w=300&h=375",
        "title": "Fugiat",
        "about": "Fugiat velit commodo sint sit occaecat consequat magna nulla cupidatat incididunt magna. Veniam aliquip fugiat minim nulla incididunt aliqua dolore proident pariatur excepteur. Sunt pariatur enim minim magna. Do id dolor sint labore sint do eiusmod est et do ullamco aliquip.",
        "releaseDate": "January 7, 2014"
    }]
