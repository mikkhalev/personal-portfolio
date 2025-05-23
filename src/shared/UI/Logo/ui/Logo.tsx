import React, {FC} from 'react';
import clsx from "clsx";
import cls from './Logo.module.scss'

const Logo: FC = () => {
    return (
        <div className={clsx(cls.logo)}>
            <span>
                Mikhalev
            </span>
        </div>
    );
};

export default Logo;