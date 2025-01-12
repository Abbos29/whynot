import React from 'react';
import s from './AboutNav.module.scss';
import Link from 'next/link';

const AboutNav = () => {
  return (
    <>
      <div className={s.about_nav}>
        <div className='container'>
          <div className={s.about_nav_wrap}>
            <Link href={'#about_us'}>About Us</Link>
            <Link href={'#communication'}>Communication</Link>
            <Link href={'/'}>FAQs</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNav;
