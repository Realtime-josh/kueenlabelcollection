import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import paths from '../helpers/paths';
import DashBoard from '../components/DashBoard';


//switch ensures only the first match is rendered
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch> 
        <Route path="/" component={DashBoard} exact={true} key="glorified"/>
        <Route path={paths.dashboard} component={DashBoard} exact={true} key="dashboard"/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
