
import * as React from "React";
import {connect} from "ReactRedux";

export const Counter = ({counter}) => {
  return <div>
    Counter:
    <h4>{counter}</h4>
  </div>
}

export const CounterContainer = connect( state => ({ counter: state.counter }))(Counter);

export default CounterContainer;
