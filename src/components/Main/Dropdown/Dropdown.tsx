import React, { FC, useState } from 'react';
import styles from './Dropdown.module.scss';
import arrow from '../../../icons/arrow.svg';
import List from './List';
import TransitionContainer from '../../TransitionContainer';

interface IDropdownProps {
  name: string;
  listTitle?: string;
}

const list = [
  { id: 1, text: 'Relevance', query: '-relevance' },
  { id: 2, text: 'Date added', query: '-created' },
  { id: 3, text: 'Name', query: '-name' },
  { id: 4, text: 'Release date', query: '-released' },
  { id: 5, text: 'Popularity', query: '-added' },
  { id: 6, text: 'Average rating', query: '-rating' },
];

const Dropdown: FC<IDropdownProps> = ({ name, listTitle }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [activeId, handleActive] = useState<string | number | null>(null);

  const handleFocus = () => setOpened(!opened);
  const handleSelected = (id: string | number) => handleActive(id);

  return (
    <div className={styles.dropdown}>
      <button
        onBlur={handleFocus}
        onFocus={handleFocus}
        className={styles.dropdown_button}
        type="button"
      >
        <div className={styles.dropdown_button_content}>
          <div>{name}</div>
          <span>Relevance</span>
          <img
            className={styles.dropdown_button_content_arrow}
            src={arrow}
            alt="arrow"
          />
        </div>
      </button>
      <TransitionContainer state={opened} timeout={300}>
        <List
          list={list}
          title={listTitle}
          activeId={activeId}
          handleActive={handleSelected}
        />
      </TransitionContainer>
    </div>
  );
};

export default Dropdown;
