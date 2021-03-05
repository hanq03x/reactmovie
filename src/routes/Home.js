import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // async와 axios는 함수의 동작 속도가 느릴 수 있으므로 함수의 동작이 완전히 끝날 때까지 기다려달라고 선언하는 것임.
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios({
      method: "get",
      url: "https://yts-proxy.now.sh/list_movies.json?sort_by=rating",
    });
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  rating={movies.rating}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
