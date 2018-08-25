import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

const AdminRoute = ({
  component: Component, loading, isAuthenticated, role, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      const { location } = props;

      if (loading) {
        return <p>Carregando...</p>;
      }

      if (!isAuthenticated) {
        return <Redirect to={{ pathname: '/signin', state: { from: location } }} />;
      }

      if (role !== 'admin') {
        return <Redirect to={{ pathname: '/home', state: { from: location } }} />;
      }

      return <Component {...props} />;
    }}
  />
);

AdminRoute.propTypes = {
  /* eslint-disable-next-line */
  component: PropTypes.any.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.shape().isRequired,
};

const mapStateToProps = ({ user }) => ({
  loading: user.loading,
  isAuthenticated: user.isAuthenticated,
  role: user.data.role,
});

export default withRouter(connect(mapStateToProps)(AdminRoute));
