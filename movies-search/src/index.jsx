import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import _ from 'lodash';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
