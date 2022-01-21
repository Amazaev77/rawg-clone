import React from 'react';
import styles from './Sidebar.module.scss';
import Menu from './Menu';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <aside className={styles.sidebar_aside}>
        <Menu />
      </aside>
    </div>
  );
};

export default Sidebar;
