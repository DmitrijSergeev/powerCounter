import clsx from "clsx";
import s from './Button.module.css'

export type ButtonProps = {
    onClick:() =>void
    name: string
    disabled?: boolean
    className?: string
}

export const Button = (props: ButtonProps) => {
    const {onClick, name, className, disabled} = props

    return (
        <button
            className={clsx(s.btn, className)}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
};
