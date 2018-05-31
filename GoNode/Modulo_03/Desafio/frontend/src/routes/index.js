import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from 'routes/ProtectedRoute';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Login from 'pages/SignIn';
import Main from 'pages/Main';

const Routes = ({ isAuthenticated }) => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/login"
        render={props => (isAuthenticated ? <Redirect to="/" /> : <Login {...props} />)}
      />
      <ProtectedRoute exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
});

export default connect(mapStateToProps)(Routes);
