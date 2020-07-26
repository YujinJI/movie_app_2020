import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };  
  getMovies = async () => {
    // 자바스크립트에게 getMovie() 함수는 시간이 필요하고
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // axios.get()의 실행을 기다려 달라고 말해주는 것이다.
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
