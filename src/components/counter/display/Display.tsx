import {ReactNode} from "react";
import s from './Display.module.css'

type DisplayProps = {
    children: ReactNode
}
export const Display = ({children}: DisplayProps) => {
    return (
        <div className={s.displayCounter}>
            {children}
        </div>
    );
};
