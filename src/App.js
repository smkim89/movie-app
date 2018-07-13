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

  // asnyc/await 는 비동기 코드를 작성하는 새로운 방법 -> 비동기 코드를 동기식으로 표현해서 간단하게 만드는 거
  
  // 몇 가지 주의할 점이 있다면 await 뒷부분이 반드시 promise를 반환해야 한다는 것과 
  // async function 자체도 promise를 반환한다는 것
  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _renderMovies = () => {
    console.log('call _renderMovies()')
    const movies = this.state.movies.map(movie => 
       <Movie 
          title={movie.title} 
          poster={movie.large_cover_image} 
          synopsis={movie.synopsis} 
          genres={movie.genres}
          key={movie.id} />
        )
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
