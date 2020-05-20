import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import paths from '../helpers/paths';
import DashBoard from '../components/DashBoard';
import ContactPage from '../components/ContactPage';
import AboutPage from '../components/AboutPage';


//switch ensures only the first match is rendered
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch> 
        <Route path="/" component={DashBoard} exact={true} key="glorified"/>
        <Route path={paths.dashboard} component={DashBoard} exact={true} key="dashboard"/>
        <Route path={paths.contact} component={ContactPage} exact={true} key="contact"/>
        <Route path={paths.about} component={AboutPage} exact={true} key="aboutpage"/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
