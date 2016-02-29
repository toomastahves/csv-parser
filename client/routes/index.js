import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from '../components/App';
import HomePage from '../components/Pages/HomePage';
import SearchPage from '../components/Pages/SearchPage';
import UploadPage from '../components/Pages/UploadPage';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App} >
        <IndexRoute component={HomePage} />
        <Route path='home' component={HomePage} />
        <Route path='search' component={SearchPage} />
        <Route path='upload' component={UploadPage} />
      </Route>
    </Router>
  );
};

export default Routes;
