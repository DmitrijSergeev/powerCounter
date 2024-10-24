import s from './Button.module.css'
import clsx from "clsx";
import {ReactNode} from "react";

type ButtonProps = {
    onClick: ()=>void
    disabled?: boolean
    className?: string
    children: ReactNode
}

export const Button = ({children, className, disabled, onClick}: ButtonProps) => {
    return (
        <button className={clsx(s.btn, className)}
                disabled={disabled}
                onClick={onClick}
        >
            {children}
        </button>
    );
};
