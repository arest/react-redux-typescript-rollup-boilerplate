import * as React from "React";
import CounterButton from "./counter-button";
import Counter from "./counter";


export const App = () => {
    return <div>
        <Counter />
        <CounterButton />
    </div>
}


export default App;