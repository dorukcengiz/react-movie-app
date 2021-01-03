import React from 'react';
import { NavLink } from 'react-router-dom';

const Movie = (props) => {
  const { movieItem } = props;
  const { title, vote_average, overview, poster_path } = movieItem;

  const IMG_API = 'https://image.tmdb.org/t/p/w1280';

  return (
    <div className='movie'>
      <img
        src={poster_path ? IMG_API + poster_path : '/images/noimage.jpg'}
        alt={title}
      />
      <div className='movie-info'>
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>

      <div className='movie-over'>
        <h2>Overview:</h2>
        <p>{overview}</p>
        <NavLink to={{ pathname: '/movie-details', state: movieItem }}>
          See Details
        </NavLink>
      </div>
    </div>
  );
};

export default Movie;
