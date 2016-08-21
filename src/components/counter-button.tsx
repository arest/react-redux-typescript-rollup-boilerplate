
import * as React from "React";
import {connect} from "ReactRedux";
import * as actionCreators from '../actions/action-creators';

export const CounterButton = ({increment,decrement}) => {

  return <div>
    <button onClick={increment}>Incr</button>
    <button onClick={decrement}>Decr</button>
  </div>
}

export const CounterButtonContainer = connect( state => ({ counter: state.counter }),actionCreators)(CounterButton);
export default CounterButtonContainer;

