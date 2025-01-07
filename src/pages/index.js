import Footer from '@/components/layout/Footer/Footer';
import LoaderBlank from '@/components/ui/LoaderBlank/LoaderBlank';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import Head from 'next/head';
import React from 'react';

const index = () => {
  return (
    <>
      <Head>
        <title>WHY NOT - Store</title>
      </Head>
      {/* <LoaderBlank /> */}
      <ThemeToggle />
      <Footer />
    </>
  );
};

export default index;
