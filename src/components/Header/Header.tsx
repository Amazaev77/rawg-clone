import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import SearchForm from './SearchForm';
import DropdownMenuMore from './DropdownMenu';
import { useWindowSize } from '../../hooks';
import RateTop from './RateTop';
import MenuMobile from './MenuMobile';

const Header = () => {
  const { windowWidth } = useWindowSize();

  const isMobileWidth = windowWidth <= 979;

  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Link to="/">RAWG</Link>
      </div>
      {!isMobileWidth && (
        <div className={styles.header_rate_top}>
          <RateTop />
        </div>
      )}
      <div className={styles.header_search_form}>
        <SearchForm />
      </div>
      <div className={styles.header_item}>
        {isMobileWidth ? (
          <MenuMobile />
        ) : (
          <div className={styles.header_item_profile}>
            <div>
              <Link to="/login">LOG IN</Link>
            </div>
            <div>
              <Link to="/signup">SIGN UP</Link>
            </div>
            <div>
              <a href="https://rawg.io/apidocs">API</a>
            </div>
            <DropdownMenuMore />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
