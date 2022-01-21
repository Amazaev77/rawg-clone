import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';
import { ISubMenuItem } from '../../../utils/menuList';
import { IIcon, menuIconsData } from '../../../utils/menuIcons';

interface ListItemProps {
  listItem: ISubMenuItem;
}

const ListItem: FC<ListItemProps> = ({ listItem }) => {
  const { svgComponent: SvgIcon } = menuIconsData.find(
    (el) => el.id === listItem.iconId
  ) as IIcon;

  return (
    <li className={styles.list_item}>
      <Link className={styles.list_item_link} to="/">
        <div className={styles.list_item_link_icon}>
          <SvgIcon height={18} width={18} />
        </div>
        <div className={styles.list_item_link_text}>{listItem.text}</div>
      </Link>
    </li>
  );
};

export default ListItem;
