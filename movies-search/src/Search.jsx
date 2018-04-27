import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/App.css'

class Search extends React.PureComponent {
    render() {
      return <div><div>Find your movie </div>
        <input className={styles.search} placeholder="Type here.."></input>
        <div className={styles.filter}>
          <span>Search by <span><button>Title</button><button>Director</button> </span></span>
          <button>Search</button>
        </div>
      </div>;
    }
  }
 export default Search;