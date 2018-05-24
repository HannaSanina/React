import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../reducers'
import { createStore, applyMiddleware } from 'redux';
import Search from '../Search/Search.jsx';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const mockStore = createStore(reducer, applyMiddleware(thunk));

describe('App', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve());  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={mockStore}>
      <App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

