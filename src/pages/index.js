import Footer from '@/components/layout/Footer/Footer';

import MobileApp from '@/components/layout/MobileApp/MobileApp';

import Header from '@/components/layout/Header/Header';
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo';

import LoaderBlank from '@/components/ui/LoaderBlank/LoaderBlank';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import Head from 'next/head';
import React from 'react';

const index = () => {
  return (
    <>
      <HeadSeo
        title="Why Not - Магазин кроссовок"
        description="Купите стильные и качественные кроссовки от лучших брендов в магазине Why Not. Выберите свою идеальную пару уже сейчас!"
      />

      <Header />
      {/* <LoaderBlank /> */}

      {/* <ThemeToggle /> */}
      {/* <Footer /> */}

    </>
  );
};

export default index;
