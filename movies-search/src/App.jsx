import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import MovieList from './MovieList';
import ErrorBoudary from './ErrorBoundary';
import styles from './styles/App.css'

function Welcome(props) {
  return <span>Hello, {props.name}</span>;
}

function Title() {
  return React.createElement('h1', {}, 'The greatest movie collection');
}

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



