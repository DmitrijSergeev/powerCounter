import {Button} from "../../button/Button";
import {ButtonNames} from "../../../features/Features";

type SettingsProps = {
    status: string
    setNewValuesHandler: ()=>void
}
export const Settings = ({status, setNewValuesHandler}: SettingsProps) => {


    return (
        <div>
            <span>{status}</span>
            <Button name={ButtonNames.set}
                    onClick={setNewValuesHandler}
            />
        </div>
    );
};
