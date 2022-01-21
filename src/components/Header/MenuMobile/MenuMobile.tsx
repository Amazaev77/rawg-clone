import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburgerIcon from '../../../icons/menu-hamburger.svg';
import styles from './MenuMobile.module.scss';
import TransitionContainer from '../../TransitionContainer';
import RateTop from '../RateTop';
import closeIcon from '../../../icons/close.svg';
import loginIcon from '../../../icons/login.svg';
import signupIcon from '../../../icons/signup.svg';
import { subMenuList } from '../../../utils/menuList';

const MenuMobile = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.wrapper_hamburger_btn}
        onClick={handleShowMenu}
        type="button"
      >
        <img src={hamburgerIcon} alt="hamburgerIcon" />
      </button>
      <TransitionContainer state={isVisibleMenu} timeout={120}>
        <div
          aria-hidden="true"
          role="banner"
          onClick={handleShowMenu}
          className={styles.wrapper_dark_background}
        />

        <div className={styles.wrapper_menu}>
          <div className={styles.wrapper_menu_top}>
            <div className={styles.wrapper_menu_top_links}>
              <Link className={styles.wrapper_menu_bold_link} to="/">
                Home
              </Link>
              <div className={styles.wrapper_menu_top_links_rate_top}>
                <RateTop />
              </div>
              <Link className={styles.wrapper_menu_bold_link} to="/">
                Reviews
              </Link>
            </div>
            <div className={styles.wrapper_menu_top_icons}>
              <div>
                <div
                  className={styles.wrapper_menu_top_icons_close}
                  onClick={handleShowMenu}
                  role="menuitem"
                  aria-hidden="true"
                >
                  <img src={closeIcon} alt="close" />
                </div>
                <Link
                  className={styles.wrapper_menu_top_icons_login}
                  to="/login"
                >
                  <div className={styles.wrapper_menu_top_icons_login_icon}>
                    <img src={loginIcon} alt="login" />
                  </div>
                  <div className={styles.wrapper_menu_top_icons_login_text}>
                    Log in
                  </div>
                </Link>
                <Link
                  className={styles.wrapper_menu_top_icons_signup}
                  to="/signup"
                >
                  <div className={styles.wrapper_menu_top_icons_signup_icon}>
                    <img src={signupIcon} alt="signup" />
                  </div>
                  <div className={styles.wrapper_menu_top_icons_signup_text}>
                    Sign up
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.wrapper_menu_bottom}>
            <nav>
              <Link className={styles.wrapper_menu_bold_link} to="/">
                Browse
              </Link>
              {subMenuList.map(({ text, menuId, id }) => {
                return (
                  menuId === 6 && (
                    <Link key={id} className={styles.wrapper_menu_link} to="/">
                      {text}
                    </Link>
                  )
                );
              })}
              <Link className={styles.wrapper_menu_bold_link} to="/">
                API
              </Link>
              <Link className={styles.wrapper_menu_bold_link} to="/">
                Get an API key
              </Link>
              <Link className={styles.wrapper_menu_bold_link} to="/">
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </TransitionContainer>
    </div>
  );
};

export default MenuMobile;
