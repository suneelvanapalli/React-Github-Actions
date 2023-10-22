import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState(null);

  // const fetchMovieHandler = () => {
  //   fetch('https://swapi.dev/api/films/', { method: 'GET' })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedMovies = data.results.map((d) => {
  //         return {
  //           id: d.episode_id,
  //           releaseDate: d.release_date,
  //           title: d.title,
  //           openingText: d.opening_crawl,
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // };

  const fetchMovieHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/film1/', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('error occured with api call');
      }
      const data = await response.json();
      const transformedMovies = data.results.map((d) => {
        return {
          id: d.episode_id,
          releaseDate: d.release_date,
          title: d.title,
          openingText: d.opening_crawl,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Loading..</p>}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !hasError && <p>No movies..</p>}
        {hasError && <p>Error occured..</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
