import React from 'react';
import styles from './Menu.module.scss';
import { menuList } from '../../../utils/menuList';
import MenuItem from '../MenuItem';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      {menuList.map((menuItem) => (
        <MenuItem key={menuItem.id} item={menuItem} />
      ))}
    </nav>
  );
};

export default Menu;
