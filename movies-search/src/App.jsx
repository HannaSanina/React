import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search/Search.jsx';
import MovieListContainer from './MovieList/MovieContainer.jsx';
import * as styles from './styles/App.css'
import { connect } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <div className={styles.stretchView}>
          <header className={styles.appHeader}>
            <Search />
          </header>
          <MovieListContainer />
        </div>
        <footer />
      </div>
    );
  }
}




