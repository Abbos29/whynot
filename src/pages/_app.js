import { AppContextProvider } from '@/context/AppContext';
import '../styles/globals.scss';
import '../i18n';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
