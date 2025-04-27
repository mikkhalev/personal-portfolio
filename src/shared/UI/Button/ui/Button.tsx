import React, {FC} from 'react';
import cls from './Button.module.scss'
import clsx from "clsx";

interface ButtonProps {
    className?: string,
    children?: React.ReactNode
    href?: string,
    mode?: 'dark' | 'light',
    target?: '_blank' | '_self' | '_top' | '_parent',
}

const Button: FC<ButtonProps> = ({ className, children, href = '#', mode = 'light', target = '_self' }) => {
    return (
        <a
            href={ href }
            target={ target }
            className={ clsx(
                cls.button,
                className,
                mode === 'light' ? cls.light : cls.dark,
            ) }
        >
            { children }
        </a>
    );
};

export default Button;