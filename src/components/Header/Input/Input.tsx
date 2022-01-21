import React, { ChangeEvent, FC, useEffect, useRef } from 'react';
import styles from './Input.module.scss';

interface IInput {
  type: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string | undefined;
  role?: string;
}

const Input: FC<IInput> = (props) => {
  const inputRef = useRef<HTMLInputElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (inputRef.current && e.altKey && e.code === 'Enter') {
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return <input {...props} className={styles.input} ref={inputRef} />;
};

export default Input;
