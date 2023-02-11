import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from 'modules/Navbar/Navbar';
import HomePage from 'Pages/HomePage/HomePage';
import MoviesPage from 'Pages/MoviesPage/MoviesPage';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';

import styles from './App.modules.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
