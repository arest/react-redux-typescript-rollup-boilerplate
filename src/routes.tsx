import * as React from "React";
import { Route, IndexRoute } from 'ReactRouter';

import App from './components/app';
import HomePage from './components/homepage';
import NotFoundPage from './components/not-found-page';

export const Routes = ( <div>
  <Route path="/" component={HomePage} />
  <Route path="/app" component={App}/>
  <Route path="/*" component={NotFoundPage}/>
  </div>
);

export default Routes;
