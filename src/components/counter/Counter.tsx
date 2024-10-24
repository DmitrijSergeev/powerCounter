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
    const [minValue, setMinValue] = useState(min)
    const [currentValue, setCurrentValue] = useState(minValue)
    const [status, setStatus] = useState('')

    const setNewValuesHandler = () => {
        if (status){
            setStatus('')
        }
    }

    return (
        <div className={s.container}>
            {!status ?
                (
                    <Main currentValue={currentValue}
                          status={status}
                          setStatus={setStatus}
                    />
                ) : (
                    <Settings
                        status={status}
                        setNewValuesHandler={setNewValuesHandler}
                    />
                )
            }
        </div>
    );
};
