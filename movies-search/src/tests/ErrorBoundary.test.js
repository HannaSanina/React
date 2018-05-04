import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from '../MovieList/ErrorBoundary';
import MovieList from '../MovieList/MovieList';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ErrorBoundary/>', () => {
    it('should be rendered correctly', () => {
        const component = renderer.create(
            <ErrorBoundary>some component</ErrorBoundary>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('init state should be false ', () => {
        const wrapper = shallow(<ErrorBoundary/>);
        expect(wrapper.instance().state.hasError).toBe(false);
    });
        
    it('in case of error state should change to true ', () => {
        const wrapper = shallow(<MovieList/>);
        const errorWrapper = shallow(<ErrorBoundary/>)
        const comp = wrapper.find('#movieList');

        comp.simulate('onError');
        expect(errorWrapper.instance().state.hasError).toBe(true);
    });
})