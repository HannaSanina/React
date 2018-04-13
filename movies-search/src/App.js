import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Welcome(props) {
  return <span>Hello, {props.name}</span>;
}

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Search />
          <Welcome name="User" />
        </header>
        <MovieList />
      </div>
    );
  }
}
export default App;

class Search extends React.PureComponent {
  render() {
    return <div><div>Find your movie </div>
      <input className="search" placeholder="Type here.."></input>
      <div className="filter">
        <span>Search by</span><span><button>Title</button><button>Director</button></span>
      </div>
    </div>;
  }
}

class MovieList extends React.Component {
  render() {
    return <div>
      <ul>
        <li>Movie 1</li>
        <li>Moview 2</li>
        <li>Moview 3</li>
      </ul>
    </div>;
  }
}



