import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';

class ProtectedRoute extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    checkAuth: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    const { render, isAuthenticated, ...props } = this.props;

    return (
      <Route
        {...props}
        render={routerProps =>
          (isAuthenticated ? (
            render(props)
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: routerProps.location },
              }}
            />
          ))
        }
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
