import React from "react";
import { getMovieById } from '../actions.jsx'
import { connect } from 'react-redux';
import MovieDetails from './MovieDetails';

class MovieDetailsContainer extends React.Component {
    componentDidMount() {
        if(this.props.match.params.number) {
            this.props.fetchDataDetails(parseInt(this.props.match.params.number, 10))
        }
    }

    render() {
        return <div>
            <MovieDetails movieDetails={this.props.movieDetails} />
        </div>;
    }
}

const mapDispatchToProps = {
    fetchDataDetails: getMovieById
  }

const mapStateToProps = state => ({ movieDetails: state.movieDetails, error: state.error })


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);