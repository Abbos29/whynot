import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [language, setLanguage] = useState("Русский");
    const [currency, setCurrency] = useState("UZS");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("selectedLanguage");
        const savedCurrency = localStorage.getItem("selectedCurrency");

        if (savedLanguage) setLanguage(savedLanguage);
        if (savedCurrency) setCurrency(savedCurrency);
    }, []);

    const handleLanguageSelect = (lang) => {
        setLanguage(lang);
        localStorage.setItem("selectedLanguage", lang);
    };

    const handleCurrencySelect = (curr) => {
        setCurrency(curr);
        localStorage.setItem("selectedCurrency", curr);
    };

    const value = {
        language,
        currency,
        handleLanguageSelect,
        handleCurrencySelect,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
