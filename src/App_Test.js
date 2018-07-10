import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'


//props는 컴포넌트로 전달됌.
//props는 변경이 안됌.

//state가 변경될때마다 render()가 실행 된다.

// const movieTitle = ["메트릭스","스타워즈","마녀"];

// const moviePoster = ["https://t1.daumcdn.net/cfile/tistory/03217F4A509D113526"
//                     ,"https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
//                     ,"http://mblogthumb3.phinf.naver.net/20141020_278/pioyoung3_1413788944691gfQJi_JPEG/movie_image.jpg?type=w2"];


class App extends Component {
  
  //Render : componentWillMount() -> render() -> componentDidMount()
  // react에서 컴포넌트가 랜더링 될때 아래의 순서로 랜더링된다 (선언하든 안하든 함수가 호출됌.)
  // 보통 willMount에서 api를 호출하여 render()에서 사용.

  //UPDATE : componentWillReceiveProps() -> shouldComponentUpdate() -> 
  //componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    greeting : "hello"
    ,movies : [
      {title : "메트릭스",
      poster : "https://t1.daumcdn.net/cfile/tistory/03217F4A509D113526"
      },
      {title : "스타워즈",
      poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
      },
      {title : "마녀",
      poster : "http://mblogthumb3.phinf.naver.net/20141020_278/pioyoung3_1413788944691gfQJi_JPEG/movie_image.jpg?type=w2"
      }
  ]


  };
  componentWillMount(){
    console.log('willMount');
  }

  componentDidMount(){
    console.log('didMount');
    setTimeout(() => {
      this.setState({
        movies : [
          ...this.state.movies,
          {
            title : "해리포터",
            poster : "http://cfile7.uf.tistory.com/image/250D5E4B549EC5C61ACE79"
          }
        ]
      })

    }, 4000)
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />

        })}
      </div>
    );
  }
}


export default App;
