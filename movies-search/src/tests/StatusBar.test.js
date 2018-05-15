import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StatusBar from '../MovieList/StatusBar';
configure({ adapter: new Adapter() });


describe('<StatusBar/>', () => {
    it('should be rendered correctly', () => {
        const onChange = jest.fn();
        const component = renderer.create(<StatusBar onSortChange={onChange} result={[movieDetails]}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('check button click', () => {
        const onChange = jest.fn();
        const wrapper = shallow(<StatusBar onSortChange={onChange} result={[movieDetails]}/>);
        expect(wrapper.find('button').length).toEqual(1);
        wrapper.find('button').simulate('click');
        expect(onChange).toBeCalled();
    })
});

const movieDetails = new Array() [
    {
        "id": 0,
        "picture": "https://imgc.allpostersimages.com/img/posters/titanic_u-L-F4S6CQ0.jpg?src=gp&w=300&h=375",
        "title": "CANOPOLY",
        "about": "Fugiat velit commodo sint sit occaecat consequat magna nulla cupidatat incididunt magna. Veniam aliquip fugiat minim nulla incididunt aliqua dolore proident pariatur excepteur. Sunt pariatur enim minim magna. Do id dolor sint labore sint do eiusmod est et do ullamco aliquip.",
        "releaseDate": "January 6, 2014"
    }]