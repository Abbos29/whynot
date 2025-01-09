import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import MobileApp from '@/components/layout/MobileApp/MobileApp';
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo';

import React from 'react';

const index = () => {
  return (
    <>
      <HeadSeo
        title='Why Not - Магазин кроссовок'
        description='Купите стильные и качественные кроссовки от лучших брендов в магазине Why Not. Выберите свою идеальную пару уже сейчас!'
      />

      <Header />
      {/* <LoaderBlank /> */}

      {/* <ThemeToggle /> */}
      <MobileApp />
      <Footer />
    </>
  );
};

export default index;
