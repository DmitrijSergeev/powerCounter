import {Button} from "../../button/Button";
import {ButtonNames} from "../../../features/Features";
import {Controls} from "../../controls/Controls.tsx";
import {LabelInput} from "../../counter/settings/label-input/LabelInput.tsx";

type SettingsProps = {
    status: string
    setNewValuesHandler: () => void
    minValue: number
    maxValue: number
    minValueHandler: () => void
    maxValueHandler: () => void
}

export const Settings = ({
                             status,
                             setNewValuesHandler,
                             minValue,
                             maxValue,
                             minValueHandler,
                             maxValueHandler
                         }: SettingsProps) => {

    return (
        <>
            <Controls>
                {status}
                <LabelInput
                    name={'Min Value'}
                    onChange={minValueHandler}
                    status={status}
                    value={minValue}
                />
                <LabelInput
                    name={'Max Value'}
                    onChange={maxValueHandler}
                    status={status}
                    value={maxValue}
                />
            </Controls>
            <Button onClick={setNewValuesHandler}>
                {ButtonNames.set}
            </Button>
        </>
    );
};
