import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Input, InputLabel, FormControl } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { Creators as UserActions } from '~/store/ducks/user';

import { Container, Form, MaterialUI } from './styles';

const FormForgotPass = ({
  classes, loading, forgotPassRequest, history,
}) => (
  <Container>
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={() => Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
      })
      }
      onSubmit={(values) => {
        forgotPassRequest(values.email, () => history.replace('/'));
      }}
      render={({
        values, errors, touched, handleChange, handleBlur, handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <span>
            <strong>1. </strong>
            Insira abaixo seu e-mail de cadastro para que possamos redefinir sua senha.
          </span>
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
                  touched.email && errors.email ? classes.cssUnderlineError : classes.cssUnderline,
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
          <button type="submit" disabled={loading}>
            {loading ? <i className="fa fa-1x fa-spinner fa-pulse" /> : 'Enviar'}
          </button>
        </Form>
      )}
    />
    <Form />
  </Container>
);

FormForgotPass.propTypes = {
  classes: PropTypes.shape().isRequired,
  loading: PropTypes.bool.isRequired,
  forgotPassRequest: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  loading: state.user.loading,
});

const mapDispatchToProps = dispatch => ({
  /* eslint-disable-next-line */
  forgotPassRequest: (email, cbNavigation) => dispatch(UserActions.forgotPassRequest(email, cbNavigation)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(MaterialUI)(FormForgotPass));
