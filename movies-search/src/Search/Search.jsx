import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './search.css'
import PropTypes from 'prop-types';
import { searchMovies } from '../actions.jsx'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Search extends React.Component {
  state = { input: "", isToggleOn: true, searchField: filters[0] };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleClick() {
    this.setState(function (prevState) {
      return { isToggleOn: !prevState.isToggleOn, searchField: !prevState.isToggleOn ? filters[0] : filters[1] };
    });
  }

  handleSearch = (e) => {
    if (e.keyCode == 13) {
      this.props.fetchData(`/search/search=${this.state.input}&searchBy=${this.state.searchField.toLowerCase()}`)
    }
  }

  render() {
    return <div><div>Find your movie </div>
      <input id="search" name="search" className={styles.search} placeholder="Type here.."
        onKeyDown={e => this.handleSearch(e)}
        onChange={e => this.handleChange(e)}>
      </input>
      <div className={styles.filter}>
        <span className={styles.searchOption}>Search by
            <button onClick={() => this.handleClick()}>
            {this.state.searchField}
          </button>
        </span>
        <div>
          <Link to={`/search/search=${this.state.input}&searchBy=${this.state.searchField.toLowerCase()}`}>
            <button>Search</button>
          </Link>
          <Link to={`/`}>
            <button>Clean Filter</button>
          </Link>
        </div>
      </div>
    </div>;
  }
};

const filters = ["Title", "Genre"];

const mapStateToProps = state => ({ movies: state.movies })

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (query) => dispatch(searchMovies(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
