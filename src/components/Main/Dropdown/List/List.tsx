import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './List.module.scss';
import checkIcon from '../../../../icons/check.svg';

interface IListItem {
  id: number | string;
  text: string;
}

interface IListProps {
  list: IListItem[];
  title?: string;
  activeId: number | string | null;
  handleActive: (id: number | string) => void;
}

const List: FC<IListProps> = ({ list, title, activeId, handleActive }) => (
  <ul className={styles.list}>
    {title && <span className={styles.list_title}>{title}</span>}
    {list.map((listItem) => (
      <li
        onClick={() => handleActive(listItem.id)}
        key={listItem.id}
        className={styles.list_item}
        role="menuitem"
        aria-hidden="true"
      >
        <Link to="/">
          {listItem.text}
          {activeId === listItem.id && (
            <img
              className={styles.list_item_icon}
              src={checkIcon}
              alt="check"
            />
          )}
        </Link>
      </li>
    ))}
  </ul>
);

export default List;
