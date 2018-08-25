import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Input, InputLabel, FormControl } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { Creators as UserActions } from '~/store/ducks/user';

import {
  Container, Content, MaterialUI, RegisterOption,
} from './styles';

const SignIn = ({
  classes, isAuthenticated, isSigningin, location, signinRequest,
}) => {
  const { from } = location.state || { from: { pathname: '/admin/home' } };

  if (isAuthenticated) {
    return <Redirect to={from.pathname} />;
  }

  return (
    <Container>
      <Content>
        <h1>Login</h1>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={() => Yup.object().shape({
            email: Yup.string()
              .email()
              .required(),
            password: Yup.string()
              .min(4)
              .required(),
          })
          }
          onSubmit={(values) => {
            signinRequest(values);
          }}
          render={({
            values, errors, touched, handleChange, handleBlur, handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl className={classes.formControl}>
                <InputLabel
                  className={classes.inputLabel}
                  FormLabelClasses={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  }}
                  htmlFor="email"
                >
                  Email
                </InputLabel>
                <Input
                  className={classes.inputText}
                  classes={{
                    underline:
                      touched.email && errors.email
                        ? classes.cssUnderlineError
                        : classes.cssUnderline,
                  }}
                  autoFocus
                  id="email"
                  type="email"
                  placeholder="Email cadastrado"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel
                  className={classes.inputLabel}
                  FormLabelClasses={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  }}
                  htmlFor="password"
                >
                  Senha
                </InputLabel>
                <Input
                  className={classes.inputText}
                  classes={{
                    underline:
                      touched.password && errors.password
                        ? classes.cssUnderlineError
                        : classes.cssUnderline,
                  }}
                  id="password"
                  type="password"
                  placeholder="Sua senha de acesso"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
              </FormControl>
              <Link to="/redefine/form/forgot_pass">Esqueceu sua senha?</Link>
              <button type="submit" disabled={isSigningin}>
                {isSigningin ? <i className="fa fa-spinner fa-pulse fa-1x" /> : <span>Entrar</span>}
              </button>
            </form>
          )}
        />
        <RegisterOption>
          <p>ou</p>
          <Link to="/signup/natural">Não possui conta? Cadastrar</Link>
        </RegisterOption>
      </Content>
    </Container>
  );
};

SignIn.propTypes = {
  classes: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isSigningin: PropTypes.bool.isRequired,
  signinRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
  isSigningin: user.isSigningin,
});

const mapDispatchToProps = dispatch => ({
  signinRequest: credentials => dispatch(UserActions.signinRequest(credentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(MaterialUI)(SignIn));
