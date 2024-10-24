import {Display} from "../../display/Display";
import {Controls} from "../../controls/Controls";
import {Button} from "../../button/Button.tsx";
import {ButtonNames, ErrorStatuses} from "../../../features/Features.ts";

type MainProps = {
    currentValue: number
    status: string
    setStatus:(status: string)=>void
}

export const Main = ({currentValue, setStatus, status}: MainProps) => {

    const setHandler = ()=> !status && setStatus(ErrorStatuses.change)

    return (
        <>
            <Display>
                {currentValue}
            </Display>
            <Controls>
                <Button onClick={()=>{}}
                >
                    {ButtonNames.inc}
                </Button>
                <Button onClick={()=>{}}
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
