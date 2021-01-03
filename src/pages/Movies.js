import Movie from '../components/Movie';
import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const FEATURED_API =
    'https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=ef74c9143a537bb940d05be2d3873c3c&page=1';

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie/?api_key=9f7e0d2d6c64964474cf4a163a4b4777&query=${searchParam}`;

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  const getMovies = async (API) => {
    /*  fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      }); */
    const response = await fetch(API);
    const data = await response.json();
    setMovies(data.results);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchParam !== '') {
      getMovies(SEARCH_API);
      setSearchParam('');
    } else {
      getMovies(FEATURED_API);
    }
  };
  const handleOnChange = (e) => {
    setSearchParam(e.target.value);
  };
  return (
    <div className='app'>
      <header>
        <span>Movies</span>
        <form onSubmit={handleOnSubmit}>
          <input
            className='search'
            type='text'
            placeholder='Search...'
            value={searchParam}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className='movie-container'>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} movieItem={movie} />)}
      </div>
    </div>
  );
};

export default Movies;
