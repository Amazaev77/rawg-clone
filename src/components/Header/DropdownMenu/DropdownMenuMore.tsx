import React, { useState } from 'react';
import dotted from '../../../icons/dotted.svg';
import styles from './DropdownMenuMore.module.scss';
import Menu from './Menu/Menu';
import TransitionContainer from '../../TransitionContainer';

const DropdownMenuMore = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <div className={styles.dropdown_wrapper} onMouseLeave={handleMouseLeave}>
      <img
        className={styles.dropdown_wrapper_dotted}
        onMouseEnter={handleMouseEnter}
        src={dotted}
        alt="dotted"
      />
      <TransitionContainer state={showDropdown} timeout={300}>
        <Menu />
      </TransitionContainer>
    </div>
  );
};

export default DropdownMenuMore;
