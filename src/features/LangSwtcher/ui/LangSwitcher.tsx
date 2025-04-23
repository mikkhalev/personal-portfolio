import React, {FC} from 'react';
import clsx from "clsx";
import cls from "./LangSwitcher.module.scss"
import Chevron from './icons/chevron.svg'
import {useTranslation} from "react-i18next";


const LangSwitcher: FC = () => {

    const {i18n} = useTranslation();

    const changeLanguageTo = (lang: string) => {
        i18n.changeLanguage(lang).then()
    }

    return (
        <div className={clsx(cls.switcher)}>
            <div className={cls.current}>
                <span>
                    {
                        i18n.language.toUpperCase()
                    }
                </span>
                <Chevron/>
            </div>
            <div className={cls.dropdown}>
                <div className={cls.dropdownItems}>
                    <div
                        className={cls.dropdownItem}
                        onClick={() => {changeLanguageTo('en');}}
                    >
                        <span>
                            English
                        </span>
                    </div>
                    <div
                        className={cls.dropdownItem}
                        onClick={() => {changeLanguageTo('ru');}}
                    >
                        <span>
                            Russian
                        </span>
                    </div>
                    <div
                        className={cls.dropdownItem}
                        onClick={() => {changeLanguageTo('de');}}
                    >
                        <span>
                            Deutsch
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LangSwitcher;