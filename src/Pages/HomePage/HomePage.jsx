import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'Utils/MoviesAPI';
import { Link, useLocation } from 'react-router-dom';

import styles from './homePage.module.scss';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation;

  useEffect(() => {
    getTrendingMovies().then(movies => setTrends(movies.results));
  }, []);

  return (
    <div className={styles.Section}>
      <ul className={styles.ImageGallery}>
        {trends.length > 0 &&
          trends.map(({ id, title, release_date, name, backdrop_path }) => {
            const releaseData = new Date(release_date);
            return (
              <li
                className={styles.ImageGalleryItem}
                key={id}
                id={id}
                release_date={release_date}
                title={title}
                name={name}
                backdrop_path={backdrop_path}
              >
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    className={styles.ImageGalleryItemImage}
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={''}
                  />
                  <p> {title}</p>
                  <p> {releaseData.toLocaleDateString()}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HomePage;
