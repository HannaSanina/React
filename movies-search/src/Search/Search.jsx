import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './search.css';
import { searchMovies } from '../actions';
import { Button, ButtonGroup, Tooltip, Input  } from 'reactstrap';

const filters = ['Title', 'Genre'];

class Search extends React.Component {
  state = { input: '', isToggleOn: true, searchField: filters[0], tooltipOpen: false, sortFieldTooltipOpen: false };
  toggle = this.toggle.bind(this);

  toggle(e) {
    debugger;
    this.setState({
      [e]: !this.state[e]
    });
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  handleSearch = (e) => {
    if (e.keyCode === 13) {
      this.props.fetchData(`/search/search=${this.state.input}&searchBy=${this.state.searchField.toLowerCase()}`);
    }
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      searchField: !prevState.isToggleOn ? filters[0] : filters[1],
    }));
  }

  render() {
    return (
      <div>
        <div>
          Find your movie
          {' '}
        </div>
        <Input
          id="search"
          name="search"
          className={styles.search}
          placeholder=" Type here.."
          onKeyDown={e => this.handleSearch(e)}
          onChange={e => this.handleChange(e)}
        />
        <div className={styles.filter}>
          <span className={styles.searchOption}>
            Search by
            <Button color="info" id="Sort" onClick={() => this.handleClick()}>
              {this.state.searchField}
            </Button>
            <Tooltip placement="bottom" isOpen={this.state.sortFieldTooltipOpen} autohide={false} target="Sort" toggle={() =>this.toggle("sortFieldTooltipOpen")}>
                 Change sort field
            </Tooltip>
          </span>
          <div>
            <ButtonGroup>
              <Link to={`/search/search=${this.state.input}&searchBy=${this.state.searchField.toLowerCase()}`}>
                <Button  id="Search" color="light">
                  Search
              </Button>
                <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} autohide={true} target="Search" toggle={() => this.toggle("tooltipOpen")}>
                  Search Query
                </Tooltip>
              </Link>
              <Link to="/">
                <Button color="light">
                  Clean Filter
                </Button>
              </Link>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ movies: state.movies });

const mapDispatchToProps = {
  fetchData: searchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
