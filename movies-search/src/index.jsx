import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import _ from 'lodash';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const Title = React.createElement('h1', {}, 'The greatest movie collection');

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(Title, document.getElementById('title'));
registerServiceWorker();
