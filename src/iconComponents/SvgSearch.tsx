import React, { FC } from 'react';

interface ISvgSearch {
  className?: string;
  width: number | string;
  height: number | string;
}

const SvgSearch: FC<ISvgSearch> = (props: ISvgSearch) => {
  const { className, width = 16, height = 16 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width={width}
      height={height}
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M9.202 3.026a4.367 4.367 0 10-6.176 6.176 4.367 4.367 0
        106.176-6.176m4.543 10.719a.875.875 0 01-1.236 0l-2.751-2.752c-2.395
        1.79-5.791 1.621-7.967-.555a6.113 6.113 0 010-8.647 6.113 6.113 0
        018.647 0c2.176 2.176 2.346 5.572.555 7.967l2.752 2.751c.34.341.34.894
        0 1.236"
      />
    </svg>
  );
};

export default SvgSearch;
