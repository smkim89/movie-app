import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'


//props는 컴포넌트로 전달됌.
//props는 변경이 안됌.

class App extends Component {
  
  //Render : componentWillMount() -> render() -> componentDidMount()
  // react에서 컴포넌트가 랜더링 될때 아래의 순서로 랜더링된다 (선언하든 안하든 함수가 호출됌.)
  // 보통 willMount에서 api를 호출하여 render()에서 사용.

  //UPDATE : componentWillReceiveProps() -> shouldComponentUpdate() -> 
  //componentWillUpdate() -> render() -> componentDidUpdate()

  state = {movies : []};

  componentWillMount(){
    console.log('willMount');
  }

  componentDidMount(){
    console.log('didMount');
    this._getMovies();
  }
  
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => {console.log(err)})
  }

  //asnyc/await 는 비동기 코드를 작성하는 새로운 방법
  _getMovies = async () => {
    const movies = await this._callApi();
    console.log(movies);
    this.setState({
      movies
    })
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />

    })
    return movies;
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}


export default App;
