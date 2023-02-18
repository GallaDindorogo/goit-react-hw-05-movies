import Navbar from 'components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';

const Layout = () => {
  return (
    <>
      <header className={styles.Navbar}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
