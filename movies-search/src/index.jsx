import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Route, Switch, HashRouter } from 'react-router-dom';
import App from './App.jsx';
import * as styles from './styles/App.css'

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
        <HashRouter>
             <App/>
        </HashRouter>
    </PersistGate>
</Provider>, document.getElementById('root'));
registerServiceWorker();
