import React from 'react';
import './Moviedetails.css';
const Moviedetails = (props) => {
  const IMG_API = 'https://image.tmdb.org/t/p/w1280';
  let movieDetails = props.location.state;
  const {
    poster_path,
    title,
    vote_average,
    adult,
    popularity,
    release_date,
    vote_count,
    original_language,
    overview,
  } = movieDetails;
  return (
    <div className='moviedetails'>
      <img
        src={poster_path ? IMG_API + poster_path : '/images/noimage.jpg'}
        alt={title}
      />
      <h1>{title}</h1>
      <br />
      <h2>{overview}</h2>
      <br />
      <div className='vote'>
        <h2>Vote: {vote_average}</h2>
        <h2>Popularity: {popularity}</h2>
        <h2>Vote Count :{vote_count}</h2>
      </div>
      <br />
      {release_date && <h2>{release_date} </h2>}
    </div>
  );
};

export default Moviedetails;
