import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

import IndexPage from '~/pages/Index';
import SignInPage from '~/pages/SignIn';
import SignUpPage from '~/pages/SignUp';
import RedefinePassword from '~/pages/RedefinePassword';

import UserPage from '~/pages/User/pages/Home';

import AdminPage from '~/pages/Admin';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/signin" component={SignInPage} />
    <Route path="/signup" component={SignUpPage} />
    <Route path="/redefine" component={RedefinePassword} />

    <AdminRoute path="/admin" component={AdminPage} />

    <PrivateRoute path="/home" component={UserPage} />

    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
