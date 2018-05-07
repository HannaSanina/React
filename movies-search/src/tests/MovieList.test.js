import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from '../MovieList/MovieList';

describe('<MovieList/>', () => {
    it('should be rendered correctly', () => {
        const component = renderer.create(
            <MovieList />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
