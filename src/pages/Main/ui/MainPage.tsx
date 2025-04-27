import React from 'react';
import cls from './MainPage.module.scss'
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import Button from "shared/UI/Button";

import DotIcon from 'shared/icons/dot.svg'
import GithubIcon from 'shared/icons/github.svg'
import LinkedInIcon from 'shared/icons/linkedin.svg'
import TelegramIcon from 'shared/icons/telegram.svg'

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
                        <span className={clsx(cls.text)}>
                            { t('Description') }
                        </span>
                        <div className={clsx(cls.flexRow, cls.buttonsRow)}>
                            <Button
                                href={'https://t.me/mikkhalev'}
                                target={'_blank'}
                            >
                                <span>
                                    {t('Contact me')}
                                </span>
                                <DotIcon/>
                            </Button>
                            <Button
                                href={'https://t.me/amikhalev_frontend'}
                                target={'_blank'}
                                mode={'dark'}
                            >
                                <TelegramIcon/>
                            </Button>
                            <Button
                                href={'https://github.com/mikkhalev/'}
                                target={'_blank'}
                                mode={'dark'}
                            >
                                <GithubIcon/>
                            </Button>
                            <Button
                                href={'#'}
                                target={'_blank'}
                                mode={'dark'}
                            >
                                <LinkedInIcon/>
                            </Button>
                        </div>
                    </div>
                    <div className={clsx(cls.photo)}>
                        <img src={'/images/AlexeyM.png'} alt={t('Name')}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPage;