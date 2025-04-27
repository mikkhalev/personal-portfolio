import React, {FC, useEffect} from 'react';
import clsx from "clsx";
import cls from "./LangSwitcher.module.scss"
import Chevron from './icons/chevron.svg'
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getLang} from "../model/selectors/getLang";
import {langActions} from "features/LangSwtcher/model/slice/langSlice";


const LangSwitcher: FC = () => {

    const dispatch = useDispatch();
    const currentLang = useSelector(getLang)

    const changeLanguageTo = (lang: string) => {
        dispatch(langActions.changeLanguage(lang))
    }

    return (
        <div className={clsx(cls.switcher)}>
            <div className={cls.current}>
                <span>
                    {
                        currentLang
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