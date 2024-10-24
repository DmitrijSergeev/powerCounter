import {Button} from "../../button/Button";
import {ButtonNames} from "../../../features/Features";
import {Controls} from "../../controls/Controls.tsx";

type SettingsProps = {
    status: string
    setNewValuesHandler: ()=>void
}

export const Settings = ({status, setNewValuesHandler}: SettingsProps) => {

    return (
        <>
            <Controls>
                {status}
                <input/>
                <input/>
            </Controls>
            <Button onClick={setNewValuesHandler}>
                {ButtonNames.set}
            </Button>
        </>
    );
};
