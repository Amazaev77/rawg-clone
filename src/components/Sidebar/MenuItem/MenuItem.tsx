import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.scss';
import { IMenuItem } from '../../../utils/menuList';
import List from '../List';

interface IItemProps {
  item: IMenuItem;
}

const MenuItem: FC<IItemProps> = ({ item }) => (
  <div className={styles.item}>
    {item.link ? (
      <Link className={styles.item_link} to={item.link}>
        {item.name}
      </Link>
    ) : (
      <div className={styles.item_name}>{item.name}</div>
    )}
    <List menuItemId={item.id} />
  </div>
);

export default MenuItem;
