import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'shared/Loader/Loader';

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('Pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('Pages/NotFoundPage/NotFoundPage'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const CastPage = lazy(() => import('Pages/CastPage/CastPage'));
const RewiewPage = lazy(() => import('Pages/RewiewPage/RewiewPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="rewiew" element={<RewiewPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
