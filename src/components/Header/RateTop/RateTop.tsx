import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RateTop.module.scss';
import darts from './darts.png';

const RateTop = () => {
  return (
    <Link className={styles.link} to="rate-top">
      <img className={styles.link_darts_img} src={darts} alt="darts" />
      <span className={styles.link_text}>Rate top games</span>
    </Link>
  );
};

export default RateTop;
