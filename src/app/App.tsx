import React, {FC, useEffect} from 'react';
import 'app/styles/style.scss'
import Header from "shared/layout/Header";
import {useSelector} from "react-redux";
import {getTheme} from "features/ThemeSwitcher/model/selectors/getTheme";

const App: FC = () => {
    let theme: 'dark' | 'light' = useSelector(getTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <>
            <Header/>
        </>
    );
};

export default App;