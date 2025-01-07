import React, { useState } from "react";
import s from "./Header.module.scss";
import { useAppContext } from "@/context/AppContext";

const Header = () => {
    const {
        language,
        currency,
        handleLanguageSelect,
        handleCurrencySelect,
    } = useAppContext();

    const [languageOpen, setLanguageOpen] = useState(false);
    const [currencyOpen, setCurrencyOpen] = useState(false);

    const toggleLanguageDropdown = () => setLanguageOpen((prev) => !prev);
    const toggleCurrencyDropdown = () => setCurrencyOpen((prev) => !prev);

    const selectLanguage = (lang) => {
        handleLanguageSelect(lang);
        setLanguageOpen(false);
    };

    const selectCurrency = (curr) => {
        handleCurrencySelect(curr);
        setCurrencyOpen(false);
    };

    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.top}>

                    <a className={s.mobile_logo} href="">
                        <img src="/header-logo.svg" alt="logo" />
                    </a>

                    <div className={s.bell}>
                        <img src="/icon-bell.svg" alt="icon-bell" />
                    </div>
                </div>
                <nav className={s.nav}>
                    <div className={s.drops}>
                        <div>
                            <div className={s.dropdown}>
                                <button className={s.dropdownButton} onClick={toggleLanguageDropdown}>
                                    <img src="/icon-globus.svg" alt="language" className={s.icon} />
                                    {language}
                                    <img className={s.arrow} src="/icon-arrow.svg" alt="arrow-icon" />
                                </button>
                                {languageOpen && (
                                    <ul className={s.dropdownMenu}>
                                        <li onClick={() => selectLanguage("Русский")}>Русский</li>
                                        <li onClick={() => selectLanguage("English")}>English</li>
                                        <li onClick={() => selectLanguage("O'zbekcha")}>O'zbekcha</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className={s.dropdown}>
                                <button className={s.dropdownButton} onClick={toggleCurrencyDropdown}>
                                    {currency}
                                    <img className={s.arrow} src="/icon-arrow.svg" alt="arrow-icon" />
                                </button>
                                {currencyOpen && (
                                    <ul className={s.dropdownMenu}>
                                        <li onClick={() => selectCurrency("UZS")}>UZS</li>
                                        <li onClick={() => selectCurrency("USD")}>USD</li>
                                        <li onClick={() => selectCurrency("EUR")}>EUR</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={s.logo}>
                        <img src="/header-logo.svg" alt="logo" />
                    </div>

                    <div className={s.inner}>


                        <a href="">
                            <div className={`${s.item} ${s.active}`}>
                                <img src="/icon-home.svg" alt="search" />
                                <span>Главная</span>
                            </div>
                        </a>

                        <a href="">
                            <div className={s.item}>
                                <img src="/icon-search.svg" alt="search" />
                                <span>Поиск</span>
                            </div>
                        </a>

                        <a href="">
                            <div className={s.item}>
                                <img src="/icon-brands.svg" alt="search" />
                                <span>Бренды</span>
                            </div>
                        </a>

                        <a href="">
                            <div className={s.item}>
                                <img src="/icon-login.svg" alt="login" />
                                <span>Логин</span>
                            </div>
                        </a>

                        <a href="">
                            <div className={s.item}>
                                <img src="/icon-cart.svg" alt="cart" />
                                <span>Корзина</span>
                            </div>
                        </a>

                    </div>

                </nav>
            </div>

            <div className={s.brands}>
                <div className="container">
                    <ul>
                        <li>JORDAN</li>
                        <li>balenciaga</li>
                        <li>Adidas</li>
                        <li>puma</li>
                        <li>nike</li>
                        <li>Off-white</li>
                        <li>Vans</li>
                        <li>gucci</li>
                        <li>Versace</li>
                        <li>reebok</li>
                        <li>all brands</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
