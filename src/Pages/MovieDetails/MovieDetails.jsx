import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './movieDetails.module.scss';

import { getMovieByID } from 'Utils/MoviesAPI';
import Btn from 'shared/Button/Button';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const from = location.state?.from || '/';
  const navigate = useNavigate();

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300/';

  useEffect(() => {
    getMovieByID(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  if (movie === null) {
    return;
  }
  const {
    original_title,
    vote_average,
    poster_path,
    overview,
    release_date,
    genres,
  } = movie;

  return (
    <>
      <Btn onClick={() => navigate(from)}></Btn>
      <div className={styles.movieInfo}>
        <img
          className={styles.ImageGalleryItemImage}
          src={`${BASE_IMG_URL}${poster_path}`}
          alt={original_title}
          width="300"
        />
        <div>
          <h1>{movie.title}</h1>
          <h2>Release date:</h2>
          <p>{release_date}</p>
          <h2>User score:</h2>
          <p>{Number(vote_average).toFixed(1)}</p>
          <h2>Owerwiew:</h2>
          <p>{overview}</p>
          <h3>Genres:</h3>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <p> {name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.movieInfo}>
        <Link to="cast" state={{ from: location.state?.from } ?? '/'}>
          <p>Cast</p>
        </Link>
        <Link to="rewiew" state={{ from: location.state?.from } ?? '/'}>
          <p>Reviews</p>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
