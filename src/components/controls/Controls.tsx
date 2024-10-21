import {ReactNode} from "react";
import s from './Controls.module.css'

type ControlsProps = {
    children: ReactNode
}
export const Controls = ({children}: ControlsProps) => {
    return (
        <div className={s.counterControl}>
            {children}
        </div>
    );
};
