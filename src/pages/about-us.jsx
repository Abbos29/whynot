import React from 'react';
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo';
import About from '@/components/layout/AboutUs/About';
import AboutNav from '@/components/layout/AboutNav/AboutNav';
import Communication from '@/components/layout/Communication/Communication';

const AboutUs = () => {
  return (
    <>
      <HeadSeo
        title='О нас - Why Not'
        description='Купите стильные и качественные кроссовки от лучших брендов в магазине Why Not. Выберите свою идеальную пару уже сейчас!'
      />
      <AboutNav />
      <About />
      <Communication />
    </>
  );
};

export default AboutUs;
