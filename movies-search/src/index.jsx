import "babel-core/register";
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import reducer from './reducers'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import * as styles from './styles/App.css'
import { hydrate } from 'react-dom';
import configureStore from './modules/configureStore';


const store = configureStore(window.PRELOADED_STATE);
const root = (<Provider store={store}>
    <App Router={BrowserRouter} />
</Provider>);

hydrate(root, document.getElementById('root'));

