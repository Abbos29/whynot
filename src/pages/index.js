
import Header from '@/components/layout/Header/Header';
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo';


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
