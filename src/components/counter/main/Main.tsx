import {ButtonNames, ErrorStatuses} from "../../../features/Features";
import {Button} from "../../button/Button";
import {Display} from "../../display/Display";
import {Controls} from "../../controls/Controls";

type MainProps = {
    status: string
    setStatus: (status: string)=>void
    incrementHandler: ()=>void
    resetHandler: ()=>void
    currentValue: number
}
export const Main = ({status, setStatus, incrementHandler, currentValue, resetHandler}: MainProps) => {

    const setHandler = ()=> !status && setStatus(ErrorStatuses.change)

    return (
        <div>
            <h1>That's Main</h1>
            <Display>{currentValue}</Display>
            <Controls>
                <Button name={ButtonNames.inc}
                        onClick={incrementHandler}
                />
                <Button name={ButtonNames.reset}
                        onClick={resetHandler}
                />
                <Button name={ButtonNames.set}
                        onClick={setHandler}
                />
            </Controls>

        </div>
    );
};
