import styles from './castPages.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCreditsByID } from 'Utils/MoviesAPI';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCreditsByID(movieId).then(cast => setCast(cast));
  }, [movieId]);

  const elements = cast.map(({ credit_id, name, character, profile_path }) => (
    <li key={credit_id}>
      {profile_path && (
        <img
          className={styles.ImageGalleryItemImage}
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt=""
          width="200"
        />
      )}
      <p>{name}</p>
      <p>{character}</p>
    </li>
  ));

  return (
    <>
      <ul>
        <li className={styles.GalleryItemList}>
          {elements.length === 0 ? (
            <p>'We did not find any information about casts for this movie'</p>
          ) : (
            elements
          )}
        </li>
      </ul>
    </>
  );
};

export default CastPage;
