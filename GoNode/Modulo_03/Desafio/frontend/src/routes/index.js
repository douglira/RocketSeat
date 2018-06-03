import React, { Fragment } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from 'routes/ProtectedRoute';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Notification from 'components/Notification';

import Login from 'pages/SignIn';
import Main from 'pages/Main';

const Routes = ({ isAuthenticated }) => (
  <BrowserRouter>
    <Fragment>
      <Notification />
      <Route
        exact
        path="/login"
        render={props => (isAuthenticated ? <Redirect to="/app" /> : <Login {...props} />)}
      />
      <ProtectedRoute render={props => <Main {...props} />} />
    </Fragment>
  </BrowserRouter>
);

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
});

export default connect(mapStateToProps)(Routes);
