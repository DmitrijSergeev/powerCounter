import {Display} from "../display/Display.tsx";
import {Controls} from "../controls/Controls.tsx";
import {Button} from "../../button/Button";

export type SettingsProps = {
    setNewValuesHandler: ()=>void
}

export const Settings = (props: SettingsProps) => {
    const {setNewValuesHandler} = props
    return (
        <>

            <Display>This is Settings</Display>
            <Controls>
                <Button
                    onClick={setNewValuesHandler}
                    name={'set'}
                />
            </Controls>
        </>
    );
};
