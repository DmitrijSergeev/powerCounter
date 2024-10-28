import {Display} from "../../display/Display";
import {Controls} from "../../controls/Controls";
import {Button} from "../../button/Button.tsx";
import {ButtonNames, ErrorStatuses} from "../../../features/Features.ts";
import s from './Main.module.css'

type MainProps = {
    currentValue: number
    status: string
    setStatus:(status: string)=>void
    incrementHandler: ()=> void
    resetHandler: ()=> void
}

export const Main = ({currentValue, setStatus, status, incrementHandler, resetHandler}: MainProps) => {

    const setHandler = ()=> !status && setStatus(ErrorStatuses.change)

    return (
        <>
            <Display>
                {currentValue}
            </Display>
            <Controls>
                <Button onClick={incrementHandler}
                >
                    {ButtonNames.inc}
                </Button>
                <Button onClick={resetHandler}
                >
                    {ButtonNames.reset}
                </Button>
                <Button onClick={setHandler}
                >
                    {ButtonNames.set}
                </Button>
            </Controls>
        </>
    );
};
