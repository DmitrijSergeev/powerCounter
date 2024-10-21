import './styles/App.css'
import {Counter} from "./components/counter/Counter";

function App() {

    return (
        <div className={'wrapper'}>
          <Counter id={1} min={2} max={10}/>
        </div>
    )
}

export default App
