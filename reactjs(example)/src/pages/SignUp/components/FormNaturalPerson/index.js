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
  Input,
  InputLabel,
  FormControl,
  IconButton,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import {
  VisibilityOffOutlined,
  VisibilityOutlined,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from '@material-ui/icons';

import {
  Form, RadioLabel, RadioLegend, MaterialUI, ContainerCpf,
} from './styles';

class FormNaturalPerson extends Component {
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

  renderRadioIcon = () => (
    <Radio
      className={this.props.classes.radioSize}
      icon={<RadioButtonUnchecked className={this.props.classes.radioSizeIcon} />}
      checkedIcon={<RadioButtonChecked className={this.props.classes.radioChecked} />}
    />
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
          gender: '',
          birthday: '',
          cpf: '',
          tel: '',
          cel: '',
        }}
        validationSchema={() => Yup.object().shape({
          email: Yup.string()
            .email('Email inválido')
            .required('Campo obrigatório'),
          password: Yup.string()
            .min(4, 'Mínimo de 4 caracteres')
            .required('Campo obrigatório'),

          name: Yup.string().required('Campo obrigatório'),
          gender: Yup.string().required('Campo obrigatório'),
          birthday: Yup.string().required('Campo obrigatório'),
          cpf: Yup.string().required('Campo obrigatório'),
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
                  gender: values.gender,
                  birthday: values.birthday,
                  cpf: getNumbersFromString(values.cpf),
                  tel: getNumbersFromString(values.tel),
                  cel: getNumbersFromString(values.cel),
                },
              },
            },
            () => history.replace('/signin'),
          );
        }}
        render={({
          values,
          touched,
          errors,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
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
            <h2>Dados pessoais</h2>
            <FormControl className={classes.formControlName}>
              <InputLabel
                className={classes.inputLabel}
                FormLabelClasses={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                }}
                htmlFor="name"
              >
                Nome completo
              </InputLabel>
              <Input
                className={classes.inputText}
                classes={{
                  underline:
                    touched.name && errors.name ? classes.cssUnderlineError : classes.cssUnderline,
                }}
                id="name"
                type="text"
                placeholder="Seu nome completo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
              />
            </FormControl>
            <FormControl className={classes.formControlBirthday}>
              <InputLabel
                className={classes.inputLabel}
                FormLabelClasses={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                }}
                htmlFor="birthday"
              >
                Data de Nascimento
              </InputLabel>
              <InputMask
                mask="99/99/9999"
                maskChar={null}
                value={values.birthday}
                onBlur={handleBlur}
                onChange={handleChange}
              >
                {inputProps => (
                  <Input
                    {...inputProps}
                    className={classes.inputText}
                    classes={{
                      underline:
                        touched.birthday && errors.birthday
                          ? classes.cssUnderlineError
                          : classes.cssUnderline,
                    }}
                    id="birthday"
                    type="text"
                  />
                )}
              </InputMask>
            </FormControl>
            <FormControl className={classes.formControlGender} component="fieldset">
              <RadioLegend>Sexo</RadioLegend>
              <RadioGroup
                value={values.gender}
                onChange={event => setFieldValue('gender', event.target.value)}
              >
                <FormControlLabel
                  value="male"
                  control={this.renderRadioIcon()}
                  label={<RadioLabel>Masculino</RadioLabel>}
                />
                <FormControlLabel
                  value="female"
                  control={this.renderRadioIcon()}
                  label={<RadioLabel>Feminino</RadioLabel>}
                />
              </RadioGroup>
            </FormControl>
            <ContainerCpf>
              <FormControl className={classes.formControlNumber}>
                <InputLabel
                  className={classes.inputLabel}
                  FormLabelClasses={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  }}
                  htmlFor="cpf"
                >
                  CPF
                </InputLabel>
                <InputMask
                  mask="999.999.999-99"
                  maskChar={null}
                  value={values.cpf}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  {inputProps => (
                    <Input
                      {...inputProps}
                      className={classes.inputText}
                      classes={{
                        underline:
                          touched.cpf && errors.cpf
                            ? classes.cssUnderlineError
                            : classes.cssUnderline,
                      }}
                      id="cpf"
                      type="text"
                    />
                  )}
                </InputMask>
              </FormControl>
              <Link to="/signup/legal">Não é pessoa física?</Link>
            </ContainerCpf>
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
            <FormControl className={classes.formControlPhone}>
              <InputLabel
                className={classes.inputLabel}
                FormLabelClasses={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                }}
                htmlFor="cel"
              >
                Celular
              </InputLabel>
              <InputMask
                mask="(99) 99999-9999"
                maskChar={null}
                value={values.cel}
                onBlur={handleBlur}
                onChange={handleChange}
              >
                {inputProps => (
                  <Input
                    {...inputProps}
                    className={classes.inputText}
                    classes={{
                      underline:
                        touched.cel && errors.cel
                          ? classes.cssUnderlineError
                          : classes.cssUnderline,
                    }}
                    id="cel"
                    type="tel"
                  />
                )}
              </InputMask>
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
)(withStyles(MaterialUI)(FormNaturalPerson));
