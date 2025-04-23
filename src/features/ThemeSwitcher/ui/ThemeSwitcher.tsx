import React, {FC} from 'react';
import clsx from "clsx";
import cls from './ThemeSwitcher.module.scss'
import Sun from "./icons/sun.svg"
import Moon from "./icons/moon.svg"
import {useDispatch, useSelector} from "react-redux";
import {themeActions} from "features/ThemeSwitcher/model/slice/themeSlice";
import {getTheme} from "features/ThemeSwitcher/model/selectors/getTheme";

const ThemeSwitcher: FC = () => {

    const dispatch = useDispatch();
    const handleSwitcher = () => {
        dispatch(themeActions.toggleTheme())
    }

    const theme = useSelector(getTheme);

    return (
        <div
            className={clsx(cls.switcher)}
            onClick={handleSwitcher}
        >
            {theme === 'dark' ? <Sun/> : <Moon/>}
        </div>
    );
};

export default ThemeSwitcher;