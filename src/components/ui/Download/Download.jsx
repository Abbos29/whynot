import React from 'react';
import s from './Download.module.scss';
import Link from 'next/link';

const Download = ({ image, title,route }) => {
  return (
    <div className={s.download}>
      <Link href={`${route}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
  );
};

export default Download;
