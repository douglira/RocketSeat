import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { api } from 'services/api';

class SignIn extends Component {
  static propTypes = {
    history: PropTypes.shape({
      replace: PropTypes.func,
    }).isRequired,
  };

  state = {
    emailInput: '',
    passwordInput: '',
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const { emailInput, passwordInput } = this.state;

    try {
      const response = await api.post('/signin', { email: emailInput, password: passwordInput });
      console.log('user', response);
      this.props.history.replace('/');
    } catch (err) {
      // console.log(err.response);
    }
  };

  render() {
    return (
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
    );
  }
}

export default SignIn;
