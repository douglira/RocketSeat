import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';

import { Container, Header } from './styles';

class SignIn extends Component {
  static propTypes = {
    signinRequest: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    emailInput: '',
    passwordInput: '',
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const { emailInput: email, passwordInput: password } = this.state;

    this.props.signinRequest({ email, password });
  };

  render() {
    const { isAuthenticated, loading } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/app' } };

    if (loading) {
      return null;
    }

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <Container>
        <Header>Facerocket</Header>
        <form onSubmit={this.handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={this.state.emailInput}
            onChange={e => this.setState({ emailInput: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            value={this.state.passwordInput}
            onChange={e => this.setState({ passwordInput: e.target.value })}
          />
          <button type="submit">Entrar</button>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
  loading: user.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
