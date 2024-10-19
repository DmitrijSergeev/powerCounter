import {Main} from "./main/Main";
import {Settings} from "./settings/Settings";
import {useState} from "react";

export const Counter = () => {
    const [status, setStatus] = useState('')

    const setNewValuesHandler = () => {
        setStatus('')
    }

    return (
        <div>
            {!status ? (
                    <Main
                    status={status}
                    setStatus={setStatus}
                    />
            ) : (
                <Settings
                    setNewValuesHandler={setNewValuesHandler}
                />
                )
            }
        </div>
    );
};
