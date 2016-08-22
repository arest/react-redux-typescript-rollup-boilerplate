import * as React from "React";
import CounterButton from "./counter-button";
import Counter from "./counter";
import { Link } from 'ReactRouter';


export const App = () => {
    return <div>
        <Link to="/">Home</Link>
        <Counter />
        <CounterButton />
    </div>
}


export default App;