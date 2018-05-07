import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/App.css'

class Search extends React.PureComponent {
  selectedFilter = "Title";
  getStyle = (name) => {
    return name == this.selectedFilter ? { "backgroundColor":"cornflowerblue" } :  { "backgroundColor":"aliceblue" };
  };

  render() {
    return <div><div>Find your movie </div>
      <input className={styles.search} placeholder="Type here..">{this.props.search}</input>
      <div className={styles.filter}>
        <span>Search by
          <span>
            <button style = {this.getStyle(filters[0])}>{filters[0]}</button>
            <button style = {this.getStyle(filters[1])}>{filters[1]}</button>
          </span>
        </span>
        <button>Search</button>
      </div>
    </div>;
  }
}
export default Search;

const filters = ["Title", "Director"]