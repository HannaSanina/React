import React from 'react';
import renderer from 'react-test-renderer';
import MoviePreview from '../MoviePreview/MoviePreview';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<MoviePreview/>', () => {
    it('title should be rendered correctly', () => {
        const component = shallow(<MoviePreview key={movieDetails.id} data={movieDetails} />);

        expect(component.find('span').text()).toBe(movieDetails.title);
    });
})

const movieDetails =
    {
        "id": 0,
        "picture": "https://imgc.allpostersimages.com/img/posters/titanic_u-L-F4S6CQ0.jpg?src=gp&w=300&h=375",
        "title": "CANOPOLY",
        "about": "Fugiat velit commodo sint sit occaecat consequat magna nulla cupidatat incididunt magna. Veniam aliquip fugiat minim nulla incididunt aliqua dolore proident pariatur excepteur. Sunt pariatur enim minim magna. Do id dolor sint labore sint do eiusmod est et do ullamco aliquip.",
        "releaseDate": "January 6, 2014"
    }
