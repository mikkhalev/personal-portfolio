import React from 'react';
import cls from './MainPage.module.scss'
import clsx from "clsx";
import {useTranslation} from "react-i18next";

const MainPage = () => {

    const { t } = useTranslation('MainPage');

    return (
        <section>
            <div className={clsx(cls.wrapper, cls.pageTitle)}>
                <div className={clsx(cls.flexRow, cls.spaceBetween)}>
                    <div className={clsx(cls.flexColumn)}>
                        <h1 className={clsx(cls.title)}>
                            { t('Name') }
                        </h1>
                        <span>
                            { t('Description') }
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPage;