import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import MovieList from './MovieList';
import ErrorBoudary from './ErrorBoundary';
import './App.css';

function Welcome(props) {
  return <span>Hello, {props.name}</span>;
}

function Title() {
  return React.createElement('h1', {}, 'The greatest movie collection');
}

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="stretch-view">
          <header className="App-header">
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



