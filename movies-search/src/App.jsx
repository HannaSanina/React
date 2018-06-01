import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Search/Search.jsx';
import MovieListContainer from './MovieList/MovieContainer.jsx';
import MovieDetailsContainer from './MovieDetail/MovieDetailsContainer';
import NotFound from './NotFound.jsx';
import EmptyList from './EmptyList.jsx';
import * as styles from './styles/App.css'
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

const App = ({Router, location, context}) => {
    return (<Router location={location} context={context}>

        <div className={styles.appContainer}>
            <div className={styles.stretchView}>
                <header className={styles.appHeader}>
                    <Search />
                </header>
                <Switch>
                    <Route exact path='/' component={EmptyList} />
                    <Route exact path='/search/:query' component={MovieListContainer} />
                    <Route exact path='/movie/:number' component={MovieDetailsContainer} />

                    <Route component={NotFound} />
                </Switch>

            </div>
            <footer />
        </div>
    </Router>
    );
}

App.propTypes = {
    Router: PropTypes.func.isRequired,
    location: PropTypes.string,
    context: PropTypes.shape({
      url: PropTypes.string,
    }),
  };
  App.defaultProps = {
    location: null,
    context: null,
  };

export default hot(module)(App);