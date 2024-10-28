import {ChangeEvent} from "react";

type LabelInputProps = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    name: string
    status: string
}
export const LabelInput = ({value, onChange, name, status}: LabelInputProps) => {
    return (
        <label>
            <span>{name}</span>
            <input
                value={value}
                onChange={onChange}
                type={'number'}
            />
        </label>
    );
};
