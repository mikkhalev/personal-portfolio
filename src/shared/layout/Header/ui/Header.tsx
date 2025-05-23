import React, {FC} from 'react';
import cls from './Header.module.scss'
import clsx from "clsx";
import Logo from "shared/UI/Logo";
import Navigation from "shared/UI/Navigation";
import ThemeSwitcher from "features/ThemeSwitcher";
import LangSwitcher from "features/LangSwtcher";

interface HeaderProps {

}

const Header:FC<HeaderProps> = () => {
    return (
        <header>
            <div className={clsx(cls.wrapper)}>
                <Logo/>
                <Navigation/>
                <div className={clsx(cls.actions)}>
                    <LangSwitcher/>
                    <ThemeSwitcher/>
                </div>
            </div>
        </header>
    );
};

export default Header;