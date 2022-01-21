import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

interface IMenuItems {
  id: string | number;
  text: string | number;
  link: string;
}

const menuItems: IMenuItems[] = [
  { id: 1, text: 'Leaderboard', link: '#/' },
  { id: 2, text: 'Discord', link: '#/' },
  { id: 3, text: '@rawgtheworld', link: '#/' },
  { id: 4, text: '@rawgthepictures', link: '#/' },
  { id: 5, text: 'Get an API key', link: '#/' },
  { id: 6, text: 'Sitemap', link: '#/' },
];

const Menu = () => {
  return (
    <div className={styles.menu}>
      {menuItems.map((item) => {
        return (
          <div key={item.id} className={styles.menu_item}>
            <Link to={item.link}>{item.text}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
