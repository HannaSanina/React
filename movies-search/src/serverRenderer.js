import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Route, Switch, StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import configureStore from './modules/configureStore';

function renderHTML(html, preloadedState) {
    return `<!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const params = req.query;
  const counter = params.search;
  console.log(counter)

        const store = configureStore();
        const context = {};
        const root = (<Provider store={store}>
                       <App context={context}
                    location={req.url}
                    Router={StaticRouter} />
        </Provider>);


        store.runSaga().done.then(() => {
            const htmlString = renderToString(root);

            // context.url will contain the URL to redirect to if a <Redirect> was used
            if (context.url) {
                res.writeHead(302, {
                    Location: context.url,
                });
                res.end();
                return;
            }

            const preloadedState = store.getState();

            res.send(renderHTML(htmlString, preloadedState));
        });
        renderToString(root);
        store.close();
    };
}
