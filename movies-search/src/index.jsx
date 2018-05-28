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
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import Search from './Search/Search.jsx';
import MovieListContainer from './MovieList/MovieContainer.jsx';
import MovieDetailsContainer from './MovieDetail/MovieDetailsContainer';
import NotFound from './NotFound.jsx';
import EmptyList from './EmptyList.jsx';
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
            <App>
                <div className={styles.appContainer}>
                    <div className={styles.stretchView}>
                        <header className={styles.appHeader}>
                            <Search />
                        </header>
                        <Switch>
                            <Route exact path='/' component={EmptyList} />

                            <Switch>
                                <Route exact path='/search/:query' component={MovieListContainer} />
                                <Route exact path='/movie/:number' component={MovieDetailsContainer} />
                               
                            </Switch>
                            <Route path="*" component={NotFound} />
                        </Switch>

                    </div>
                    <footer />
                </div>
            </App>
        </HashRouter>
    </PersistGate>
</Provider>, document.getElementById('root'));
registerServiceWorker();
