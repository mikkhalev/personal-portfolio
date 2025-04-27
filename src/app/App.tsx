import React, {FC, useEffect} from 'react';
import 'app/styles/style.scss'
import Header from "shared/layout/Header";
import {useSelector} from "react-redux";
import {getTheme} from "features/ThemeSwitcher/model/selectors/getTheme";
import MainPage from "pages/Main/ui/MainPage";
import {getLang} from "features/LangSwtcher/model/selectors/getLang";
import i18n from "i18next";

const App: FC = () => {

    let theme: 'dark' | 'light' = useSelector(getTheme);
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    let currentLanguage: string = useSelector(getLang);
    useEffect(() => {
        document.documentElement.lang = currentLanguage;
        i18n.changeLanguage(currentLanguage).then()
    }, [currentLanguage]);

    return (
        <>
            <Header/>
            <MainPage/>
        </>
    );
};

export default App;