import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';

import logo from 'assets/images/logo-2.png';
import { Container } from './styles';

class SignIn extends Component {
  static propTypes = {
    signinRequest: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    form: {
      email: '',
      password: '',
    },
  };

  handleSignIn = async (e) => {
    e.preventDefault();

    this.props.signinRequest({ ...this.state.form });
  };

  handleChange = fieldname => (event) => {
    const form = { ...this.state.form };
    form[fieldname] = event.target.value;
    this.setState({ form });
  };

  render() {
    const { isAuthenticated } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/app' } };

    if (isAuthenticated) {
      return <Redirect to={from.pathname} />;
    }

    return (
      <Container>
        <img src={logo} alt="Facerocket" />
        <form onSubmit={this.handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={this.state.form.email}
            onChange={this.handleChange('email')}
          />
          <input
            type="password"
            placeholder="Senha"
            value={this.state.form.password}
            onChange={this.handleChange('password')}
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn));
