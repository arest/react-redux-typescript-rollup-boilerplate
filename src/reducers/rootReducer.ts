import {combineReducers} from 'Redux';
import {counter} from './counterReducer';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
