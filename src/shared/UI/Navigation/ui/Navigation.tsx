import React, {FC} from 'react';
import cls from './Navigation.module.scss'
import clsx from "clsx";

const Navigation:FC = () => {
    return (
        <nav>
            <div className={cls.navigation}>
                <a href="#" className={clsx(cls.item)}>
                    Work
                </a>
                <a href="#" className={clsx(cls.item)}>
                    About
                </a>
                <a href="#" className={clsx(cls.item)}>
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navigation;