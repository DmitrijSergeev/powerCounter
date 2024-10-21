import s from './Counter.module.css'
import {Main} from "../../components/counter/main/Main";
import {Settings} from "../../components/counter/settings/Settings";
import {useState} from "react";

type CounterProps = {
    id: number
    min: number
    max: number
}
export const Counter = ({max, min, id}: CounterProps) => {

    const [status, setStatus] = useState('')

    const setNewValuesHandler = () => {
        setStatus('')
        console.log(status)
    }

    return (
        <div className={s.container}>
            {
                !status ? (
                    <Main status={status}
                          setStatus={setStatus}
                    />
                ) : (
                    <Settings status={status}
                              setNewValuesHandler={setNewValuesHandler}
                    />
                )
            }
        </div>
    );
};
