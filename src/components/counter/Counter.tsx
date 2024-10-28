import {Main} from "../../components/counter/main/Main";
import {Settings} from "../../components/counter/settings/Settings";
import {useEffect, useState} from "react";
import s from './Counter.module.css'

type CounterProps = {
    id: number
    min: number
    max: number
}
export const Counter = ({max, min, id}: CounterProps) => {
    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)
    const [currentValue, setCurrentValue] = useState(minValue)
    const [status, setStatus] = useState('')

    useEffect(() => {
        const counterMinValueAsString = localStorage.getItem(`counterMinValue/${id}`)
        const counterMaxValueAsString = localStorage.getItem(`counterMaxValue/${id}`)
        const counterValueAsString = localStorage.getItem(`counterCurrentValue/${id}`)

        if (counterMinValueAsString) {
            setMinValue(JSON.parse(counterMinValueAsString))
        }
        if (counterMaxValueAsString) {
            setMaxValue(JSON.parse(counterMaxValueAsString))
        }
        if (counterValueAsString) {
            setCurrentValue(JSON.parse(counterValueAsString))
        }
    }, [id])

    useEffect(() => {
        localStorage.setItem(`counterCurrentValue/${id}`, JSON.stringify(currentValue))
    }, [id, currentValue])

    const incrementHandler = () => currentValue < maxValue && setCurrentValue((prev) => prev + 1)
    const resetHandler = () => currentValue > minValue && setCurrentValue(minValue)

    const minValueHandler = () => {
    }

    const maxValueHandler = () => {
    }

    const setNewValuesHandler = () => {
        if (status) {
            setStatus('')
            localStorage.setItem(`counterMinValue/${id}`, JSON.stringify(minValue))
            localStorage.setItem(`counterMaxValue/${id}`, JSON.stringify(maxValue))
            setCurrentValue(minValue)
        }
    }

    return (
        <div className={s.container}>
            {!status ?
                (
                    <Main currentValue={currentValue}
                          status={status}
                          setStatus={setStatus}
                          incrementHandler={incrementHandler}
                          resetHandler={resetHandler}
                    />
                ) : (
                    <Settings
                        status={status}
                        setNewValuesHandler={setNewValuesHandler}
                        minValue={minValue}
                        maxValue={maxValue}
                        maxValueHandler={maxValueHandler}
                        minValueHandler={minValueHandler}
                    />
                )
            }
        </div>
    );
};
