import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search/Search.jsx';
import MovieList from './MovieList/MovieList.jsx';
import * as styles from './styles/App.css'

class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <div className={styles.stretchView}>
          <header className={styles.appHeader}>
            <Search />
            {/* <Welcome name="User" /> */}
          </header>
          <MovieList />
        </div>
        <footer />
      </div>
    );
  }
}
export default App;



