import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Container, Content } from './styles';

import FormForgotPass from './components/FormForgotPass';
import FormResetPass from './components/FormResetPass';

const RedefinePassword = ({ match }) => (
  <Container>
    <Content>
      <h1>
        <i className="fa fa-refresh fa-2x" />
        Redefinição de senha
      </h1>
      <p>Siga os passos abaixo para redefinir sua senha</p>
      <Switch>
        <Route exact path={`${match.path}/form/forgot_pass`} component={FormForgotPass} />
        <Route exact path={`${match.path}/form/reset_pass`} component={FormResetPass} />
        <Route render={() => <Redirect to={`${match.path}/form/forgot_pass`} />} />
      </Switch>
    </Content>
  </Container>
);

RedefinePassword.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default RedefinePassword;
