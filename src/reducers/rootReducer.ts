import {combineReducers} from 'Redux';
import {counter} from './counterReducer';
import { routerReducer } from 'ReactRouterRedux'

const rootReducer = combineReducers({
  counter,
  routing: routerReducer
});

export default rootReducer;
