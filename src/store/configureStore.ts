import * as Redux from 'Redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState:any) {
  return Redux.createStore(rootReducer, initialState);
}
