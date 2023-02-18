import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa';
import styles from './searchbar.module.scss';

import { getMoviesByQuerySearch } from '../../../Utils/MoviesAPI';
import ImageGallery from '../ImageGallery/ImageGallery';
import items from 'components/Navbar/items';

const Searchbar = () => {
  const [state, setState] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieToSearch = searchParams.get('search');

  useEffect(() => {
    if (movieToSearch === '' || movieToSearch === null) {
      return;
    }
    getMoviesByQuerySearch(movieToSearch).then(setState);
  }, [movieToSearch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  return (
    <div className={styles.SearchBarContainer}>
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <FaSistrix size={20} />
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      <ul>{items && <ImageGallery items={state} />}</ul>
    </div>
  );
};

export default Searchbar;
