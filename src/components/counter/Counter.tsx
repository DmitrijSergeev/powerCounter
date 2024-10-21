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
    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)
    const [currentValue, setCurrentValue] = useState(minValue)

    const incrementHandler = () => currentValue < maxValue && setCurrentValue(prev => prev + 1)

    const resetHandler = () => currentValue > minValue && setCurrentValue(minValue)

    const setNewValuesHandler = () => {
        if (status){
            setStatus('')
            localStorage.setItem(`counterMinValue/${id}`, JSON.stringify(minValue))
            localStorage.setItem(`counterMaxValue/${id}`, JSON.stringify(maxValue))
            setCurrentValue(minValue)
        }
    }

    return (
        <div className={s.container}>
            {
                !status ? (
                    <Main status={status}
                          setStatus={setStatus}
                          incrementHandler={incrementHandler}
                          currentValue={currentValue}
                          resetHandler={resetHandler}
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
