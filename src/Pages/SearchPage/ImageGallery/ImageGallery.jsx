import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from '../../HomePage/homePage.module.scss';

const ImageGallery = ({ items }) => {
  const location = useLocation();

  const elements = items.map(
    ({ id, title, release_date, name, backdrop_path }) => {
      const releaseData = new Date(release_date);

      return (
        <div className={styles.Section}>
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
              <p className={styles.Title}> {title}</p>
              <p className={styles.Title}>
                {' '}
                {releaseData.toLocaleDateString()}
              </p>
            </Link>
          </li>
        </div>
      );
    }
  );
  return <ul className={styles.ImageGallery}>{elements}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};
