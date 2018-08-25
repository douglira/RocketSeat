import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import queryString from 'query-string';

import { connect } from 'react-redux';
import { Creators as UserActions } from '~/store/ducks/user';

import {
  Input, InputLabel, FormControl, IconButton, InputAdornment,
} from '@material-ui/core';
import { VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons';

import { Container, Form, MaterialUI } from './styles';

class FormResetPass extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    loading: PropTypes.bool.isRequired,
    resetPassRequest: PropTypes.func.isRequired,
    location: PropTypes.shape({
      search: PropTypes.string,
    }).isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    const token = this.validateRoute();
    this.state = {
      token,
      showPassword: false,
    };
  }

  validateRoute = () => {
    const { location, history } = this.props;
    const query = queryString.parse(location.search);
    const { t: token } = query;

    if (!token) {
      history.replace('/redefine/form/forgot_pass');
      return null;
    }

    if (token.length !== 20) {
      history.replace('/redefine/form/forgot_pass');
      return null;
    }

    return token;
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  renderIconPassword = () => (
    <InputAdornment position="end">
      <IconButton onClick={this.handleClickShowPassword} onMouseDown={this.handleMouseDownPassword}>
        {this.state.showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
      </IconButton>
    </InputAdornment>
  );

  render() {
    const {
      classes, loading, history, resetPassRequest,
    } = this.props;
    const { token, showPassword } = this.state;

    return (
      <Container>
        <Formik
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          validationSchema={() => Yup.object().shape({
            password: Yup.string()
              .min(4, 'Mínimo 4 caracteres')
              .required(),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Senhas não coincidem')
              .required(),
          })
          }
          onSubmit={({ password, confirmPassword }) => {
            resetPassRequest(
              {
                token,
                password,
                confirmPassword,
              },
              () => history.replace('/signin'),
            );
          }}
          render={({
            values, errors, touched, handleChange, handleBlur, handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <span>
                <strong>2. </strong>
                Digite nos campos abaixo a sua nova senha.
              </span>
              <FormControl className={classes.formControl}>
                <InputLabel
                  className={classes.inputLabel}
                  FormLabelClasses={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  }}
                  htmlFor="password"
                >
                  Nova senha
                </InputLabel>
                <Input
                  className={classes.inputText}
                  classes={{
                    underline:
                      (touched.password && errors.password)
                        ? classes.cssUnderlineError
                        : classes.cssUnderline,
                  }}
                  autoFocus
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  endAdornment={this.renderIconPassword()}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel
                  className={classes.inputLabel}
                  FormLabelClasses={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  }}
                  htmlFor="confirmPassword"
                >
                  Confirmar senha
                </InputLabel>
                <Input
                  className={classes.inputText}
                  classes={{
                    underline:
                      touched.confirmPassword && errors.confirmPassword
                        ? classes.cssUnderlineError
                        : classes.cssUnderline,
                  }}
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirme sua nova senha"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  endAdornment={this.renderIconPassword()}
                />
              </FormControl>
              <button type="submit" disabled={loading}>
                {loading ? <i className="fa fa-1x fa-spinner fa-pulse" /> : 'Concluir redefinição'}
              </button>
            </Form>
          )}
        />
        <Form />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.user.loading,
});

const mapDispatchToProps = dispatch => ({
  /* eslint-disable-next-line */
  resetPassRequest: (email, cbNavigation) => dispatch(UserActions.resetPassRequest(email, cbNavigation)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(MaterialUI)(FormResetPass));
