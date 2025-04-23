import React, {FC} from 'react';
import cls from './Navigation.module.scss'
import clsx from "clsx";
import {useTranslation} from "react-i18next";

const Navigation:FC = () => {

    const {t} = useTranslation('header');

    return (
        <nav>
            <div className={cls.navigation}>
                <a href="#" className={clsx(cls.item)}>
                    { t('Work') }
                </a>
                <a href="#" className={clsx(cls.item)}>
                    { t('About') }
                </a>
                <a href="#" className={clsx(cls.item)}>
                    { t('Contact') }
                </a>
            </div>
        </nav>
    );
};

export default Navigation;