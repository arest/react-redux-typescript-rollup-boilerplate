import * as React from "React";
import {render} from 'ReactDOM';
import configureStore from './store/configureStore';
import { Provider } from 'ReactRedux';
import { Router, browserHistory } from 'ReactRouter';
import { syncHistoryWithStore } from 'ReactRouterRedux';
import {Routes} from './routes';

const store = configureStore({counter:0});
const history = syncHistoryWithStore(browserHistory, store);

render(
      <Provider store={store}>
        <Router history={history} routes={Routes} />
      </Provider>,
    document.getElementById("container")
);