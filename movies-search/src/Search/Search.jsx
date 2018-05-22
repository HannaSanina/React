import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './search.css'
import PropTypes from 'prop-types';
import { searchMovies } from '../actions.jsx'
import { connect } from 'react-redux';

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

  render() {
    const { store } = this.context;
    return <div><div>Find your movie </div>
      <input name="search" className={styles.search} placeholder="Type here.." 
        onKeyDown={e => e.keyCode == 13 ? this.props.fetchData(this.state.input, this.state.searchField) : ""}
        onChange={e => this.handleChange(e)}>
      </input>
      <div className={styles.filter}>
        <span className={styles.searchOption}>Search by
            <button onClick={() => this.handleClick()}>
            {this.state.searchField}
          </button>
        </span>
        <button onClick={e => {
          e.preventDefault();
          this.props.fetchData(this.state.input, this.state.searchField);
        }}>Search</button>
      </div>
    </div>;
  }
};

Search.contextTypes = {
  store: PropTypes.object
};

const filters = ["Title", "Genre"];

const mapStateToProps = (state) => {
  return {
    data: state.data,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (searchTearm, fieldName) => dispatch(searchMovies(searchTearm, fieldName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
