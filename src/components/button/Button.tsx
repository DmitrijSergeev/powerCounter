import s from './Button.module.css'
import clsx from "clsx";

type ButtonProps = {
    name: string
    onClick: ()=>void
    disabled?: boolean
    className?: string
}

export const Button = ({name, className, disabled, onClick}: ButtonProps) => {
    return (
        <button className={clsx(s.btn, className)}
                disabled={disabled}
                onClick={onClick}
        >
            {name}
        </button>
    );
};
