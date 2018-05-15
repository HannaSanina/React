import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import _ from 'lodash';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


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
        <App />
    </PersistGate>
</Provider>, document.getElementById('root'));
registerServiceWorker();
