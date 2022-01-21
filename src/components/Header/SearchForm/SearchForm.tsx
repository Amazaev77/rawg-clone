import React, { ChangeEvent, useState } from 'react';
import styles from './SearchForm.module.scss';
import { SvgSearch } from '../../../iconComponents';
import Input from '../Input';
import { useWindowSize } from '../../../hooks';

const SearchForm = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const { windowWidth } = useWindowSize();

  const isMobileWidth = windowWidth <= 979;

  return (
    <form className={styles.form}>
      <Input
        type="text"
        role="searchbox"
        onChange={handleChange}
        value={value}
        placeholder={
          isMobileWidth ? 'Search for games' : 'Search 664,929 games'
        }
      />
      <SvgSearch
        width={14}
        height={14}
        className={styles.form_svg_icon_search}
      />
      {!isMobileWidth && (
        <div className={styles.form_hotkey}>
          <div className={styles.form_hotkey_alt}>alt</div>
          <span className={styles.form_hotkey_plus}>+</span>
          <div className={styles.form_hotkey_enter}>enter</div>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
