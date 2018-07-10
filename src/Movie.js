import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types'



class Movie extends Component{

    static propTypes = {
        title : PropTypes.string.isRequired, //isRequired 필수값으로처리.
        poster : PropTypes.string
    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    static propTypes = {
        poster : PropTypes.string.isRequired
    }
    render() {
        return (
            <img src={this.props.poster} />
        );
    }
}

export default Movie;