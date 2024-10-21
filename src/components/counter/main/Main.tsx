import {ButtonNames, ErrorStatuses} from "../../../features/Features";
import {Button} from "../../button/Button";

type MainProps = {
    status: string
    setStatus: (status: string)=>void
}
export const Main = ({status, setStatus}: MainProps) => {

    const setHandler = ()=> !status && setStatus(ErrorStatuses.change)

    return (
        <div>
            That's Main
            <Button name={ButtonNames.set}
                    onClick={setHandler}
            />
        </div>
    );
};
