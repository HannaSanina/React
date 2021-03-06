import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends Component {
    state = { hasError: false };

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
      /*   logErrorToMyService(error, info); */
    }

    render() {
        if (this.state.hasError) {
            return <h1>No results found</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;