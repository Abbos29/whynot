import { AppContextProvider } from "@/context/AppContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <AppContextProvider>
            <Component {...pageProps} />
        </AppContextProvider>
    );
}

export default MyApp;
