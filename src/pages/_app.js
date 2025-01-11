import { AppContextProvider } from '@/context/AppContext';
import '../styles/globals.scss';
import '../i18n';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppContextProvider>
    </>
  );
}

export default MyApp;
