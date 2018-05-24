import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from '../MovieList/MovieList';

describe('<MovieList/>', () => {
    it('should be rendered correctly', () => {
        const component = renderer.create(
            <MovieList movies={movieDetails}/>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})

const movieDetails = [
    {
        "id": 0,
        "picture": "https://imgc.allpostersimages.com/img/posters/titanic_u-L-F4S6CQ0.jpg?src=gp&w=300&h=375",
        "title": "CANOPOLY",
        "about": "Fugiat velit commodo sint sit occaecat consequat magna nulla cupidatat incididunt magna. Veniam aliquip fugiat minim nulla incididunt aliqua dolore proident pariatur excepteur. Sunt pariatur enim minim magna. Do id dolor sint labore sint do eiusmod est et do ullamco aliquip.",
        "releaseDate": "January 6, 2014"
    }]