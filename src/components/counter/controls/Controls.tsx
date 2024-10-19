import {ReactNode} from "react";
import s from './Controls.module.css'

type ControlProps = {
    children: ReactNode
}
export const Controls = ({children}: ControlProps) => {
    return (
        <div className={s.controlCounter}>
            {children}
        </div>
    );
};
