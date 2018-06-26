import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Search/Search';
import MovieListContainer from './MovieList/MovieContainer';
import MovieDetailsContainer from './MovieDetail/MovieDetailsContainer';
import NotFound from './NotFound';
import EmptyList from './EmptyList';
import * as styles from './styles/App.css';

const App = () => (
  <div className={styles.appContainer}>
    <div className={styles.stretchView}>
      <header className={styles.appHeader}>
        <Search />
      </header>
      <Switch>
        <Route exact path="/" component={EmptyList} />
        <Route exact path="/search/:query" component={MovieListContainer} />
        <Route exact path="/movie/:number" component={MovieDetailsContainer} />

        <Route component={NotFound} />
      </Switch>

    </div>
    <footer />
  </div>
);

export default App;
