import React, { FC } from 'react';

interface IArrowDownProps {
  width: number | string;
  height: string | number;
  className?: string;
}

const ArrowSvg: FC<IArrowDownProps> = (props) => {
  return (
    <svg {...props} viewBox="0 0 19 35" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.414 16.476l-15-15A2 2 0 10.586 4.304L14.172 17.89.586 31.476a2 2 0 102.828 2.828l15-15a2 2 0 000-2.828z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ArrowSvg;
