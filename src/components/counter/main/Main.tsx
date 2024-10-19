import {Display} from "../display/Display";
import {Controls} from "../controls/Controls";
import {Button} from "../../button/Button";

export type MainProps = {
    status: string
    setStatus: (status: string) => void
}
export const Main = (props: MainProps) => {
    const {status, setStatus} = props

    const setHandler = () => !status && setStatus('sss')

    return (
        <>
            <Display>
                <span>That's Main</span>
            </Display>
            <Controls>
                <Button
                    onClick={()=>{}}
                    name={'inc'}
                />
                <Button
                    onClick={()=>{}}
                    name={'reset'}
                />
                <Button
                    onClick={setHandler}
                    name={'set'}
                />
            </Controls>
        </>
    );
};
