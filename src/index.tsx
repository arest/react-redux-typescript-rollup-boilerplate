import * as React from "React";
import * as ReactDOM from "ReactDOM";
import configureStore from './store/configureStore';
import { Provider } from 'ReactRedux';
import App from "./components/app";

const store = configureStore({counter:0});

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
    document.getElementById("container")
);