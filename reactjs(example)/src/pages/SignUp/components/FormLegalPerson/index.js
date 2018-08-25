import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

import { connect } from 'react-redux';
import { Creators as UserActions } from '~/store/ducks/user';

import { getNumbersFromString } from '~/libs/helpers';

import {
  Input, InputLabel, FormControl, IconButton, InputAdornment,
} from '@material-ui/core';
import { VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons';

import { Form, MaterialUI, ContainerCnpj } from './styles';

class FormLegalPerson extends Component {
  static propTypes = {
    signupRequest: PropTypes.func.isRequired,
    isSigningup: PropTypes.bool.isRequired,
    classes: PropTypes.shape().isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func,
    }).isRequired,
  };

  state = {
    showPassword: false,
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
      classes, isSigningup, signupRequest, history,
    } = this.props;
    const { showPassword } = this.state;

    return (
      <Formik
        initialValues={{
          email: '',
          password: '',

          name: '',
          tel: '',
          cnpj: '',
          corporateName: '',
          stateRegistration: '',
        }}
        validationSchema={() => Yup.object().shape({
          email: Yup.string()
            .email('Email inválido')
            .required('Campo obrigatório'),
          password: Yup.string()
            .min(4, 'Mínimo de 4 caracteres')
            .required('Campo obrigatório'),

          name: Yup.string().required('Campo obrigatório'),
          corporateName: Yup.string().required('Campo obrigatório'),
          cnpj: Yup.string().required('Campo obrigatório'),
          stateRegistration: Yup.string().required('Campo obrigatório'),
          tel: Yup.string().required('Campo obrigatório'),
        })
        }
        onSubmit={(values) => {
          signupRequest(
            {
              user: {
                email: values.email,
                password: values.password,
                person: {
                  name: values.name,
                  corporateName: values.corporateName,
                  cnpj: getNumbersFromString(values.cnpj),
                  stateRegistration: getNumbersFromString(values.stateRegistration),
                  tel: getNumbersFromString(values.tel),
                },
              },
            },
            () => history.replace('/signin'),
          );
        }}
        render={({
          values, touched, errors, handleChange, handleBlur, handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl className={classes.formControlEmail}>
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
                id="email"
                type="email"
                placeholder="Email cadastrado"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
            </FormControl>
            <FormControl className={classes.formControlPass}>
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
                type={showPassword ? 'text' : 'password'}
                placeholder="Sua senha de acesso"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                endAdornment={this.renderIconPassword()}
              />
            </FormControl>
            <h2>Dados jurídicos</h2>
            <FormControl className={classes.formControlName}>
              <InputLabel
                className={classes.inputLabel}
                FormLabelClasses={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                }}
                htmlFor="name"
              >
                Responsável
              </InputLabel>
              <Input
                className={classes.inputText}
                classes={{
                  underline:
                    touched.name && errors.name ? classes.cssUnderlineError : classes.cssUnderline,
                }}
                id="name"
                type="text"
                placeholder="Nome do responsável completo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
              />
            </FormControl>
            <FormControl className={classes.formControlPhone}>
              <InputLabel
                className={classes.inputLabel}
                FormLabelClasses={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                }}
                htmlFor="tel"
              >
                Telefone
              </InputLabel>
              <InputMask
                mask="(99) 9999-9999"
                maskChar={null}
                value={values.tel}
                onBlur={handleBlur}
                onChange={handleChange}
              >
                {inputProps => (
                  <Input
                    {...inputProps}
                    className={classes.inputText}
                    classes={{
                      underline:
                        touched.tel && errors.tel
                          ? classes.cssUnderlineError
                          : classes.cssUnderline,
                    }}
                    id="tel"
                    type="tel"
                  />
                )}
              </InputMask>
            </FormControl>
            <ContainerCnpj>
              <FormControl className={classes.formControlCnpj}>
                <InputLabel
                  className={classes.inputLabel}
                  FormLabelClasses={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  }}
                  htmlFor="cnpj"
                >
                  CNPJ
                </InputLabel>
                <InputMask
                  mask="99.999.999/9999-99"
                  maskChar={null}
                  value={values.cnpj}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  {inputProps => (
                    <Input
                      {...inputProps}
                      className={classes.inputText}
                      classes={{
                        underline:
                          touched.cnpj && errors.cnpj
                            ? classes.cssUnderlineError
                            : classes.cssUnderline,
                      }}
                      id="cnpj"
                      type="text"
                    />
                  )}
                </InputMask>
              </FormControl>
              <Link to="/signup/natural">Não é pessoa jurídica?</Link>
            </ContainerCnpj>
            <FormControl className={classes.formControlName}>
              <InputLabel
                className={classes.inputLabel}
                FormLabelClasses={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                }}
                htmlFor="corporateName"
              >
                Razão social
              </InputLabel>
              <Input
                className={classes.inputText}
                classes={{
                  underline:
                    touched.corporateName && errors.corporateName
                      ? classes.cssUnderlineError
                      : classes.cssUnderline,
                }}
                id="corporateName"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.corporateName}
              />
            </FormControl>
            <FormControl className={classes.formControlName}>
              <InputLabel
                className={classes.inputLabel}
                FormLabelClasses={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                }}
                htmlFor="stateRegistration"
              >
                Inscrição estadual
              </InputLabel>
              <Input
                className={classes.inputText}
                classes={{
                  underline:
                    touched.stateRegistration && errors.stateRegistration
                      ? classes.cssUnderlineError
                      : classes.cssUnderline,
                }}
                id="stateRegistration"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.stateRegistration}
              />
            </FormControl>
            <button type="submit" disabled={isSigningup}>
              {isSigningup ? <i className="fa fa-1x fa-spinner fa-pulse" /> : 'Finalizar cadastro'}
            </button>
            <span>
              Já tem um cadastro? <Link to="signin">Entrar</Link>
            </span>
          </Form>
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  isSigningup: state.user.isSigningup,
});

const mapDispatchToProps = dispatch => ({
  signupRequest: (data, cbNavigation) => dispatch(UserActions.signupRequest(data, cbNavigation)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(MaterialUI)(FormLegalPerson));
