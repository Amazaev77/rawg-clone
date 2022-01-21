import React from 'react';
import styles from './Main.module.scss';
import Dropdown from './Dropdown';

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.main_title}>New and trending</h1>
      <h2 className={styles.main_subtitle}>
        Based on player counts and release date
      </h2>
      <Dropdown name="Order by:" />
    </main>
  );
};

export default Main;
