import items from 'modules/Navbar/items';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'Utils/MoviesAPI';
import { NavLink, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation;

  useEffect(() => {
    getTrendingMovies().then(movies => setTrends(movies.results));
  }, []);

  return (
    <div>
      <ul>
        {trends.length > 0 &&
          trends.map(({ id, title }) => {
            return (
              <li key={id}>
                <NavLink to={`/movies/${id}`} state={location}>
                  {title}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HomePage;
