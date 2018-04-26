import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Search extends React.PureComponent {
    render() {
      return <div><div>Find your movie </div>
        <input className="search" placeholder="Type here.."></input>
        <div className="filter">
          <span>Search by <span><button>Title</button><button>Director</button> </span></span>
          <button>Search</button>
        </div>
      </div>;
    }
  }
 export default Search;