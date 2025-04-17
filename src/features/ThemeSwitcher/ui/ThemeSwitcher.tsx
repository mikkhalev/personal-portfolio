import React, {FC} from 'react';
import clsx from "clsx";
import cls from './ThemeSwitcher.module.scss'
import Sun from "./icons/sun.svg"

const ThemeSwitcher: FC = () => {
    return (
        <div className={clsx(cls.switcher)}>
            <Sun/>
        </div>
    );
};

export default ThemeSwitcher;