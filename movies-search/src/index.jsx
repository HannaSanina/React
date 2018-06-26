import './styles/index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistStore(store)}>
    <HashRouter>
      <App />
    </HashRouter>
  </PersistGate>
</Provider>, document.getElementById('root'));
registerServiceWorker();
