import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Container, Content } from './styles';

import FormNaturalPerson from './components/FormNaturalPerson';
import FormLegalPerson from './components/FormLegalPerson';

const SignUp = ({ match }) => (
  <Container>
    <Content>
      <h1>
        <i className="fa fa-user-o fa-2x" />
        Cadastrar-se
      </h1>
      <p>Preencha o formulário abaixo</p>
      <Switch>
        <Route exact path={`${match.path}/natural`} component={FormNaturalPerson} />
        <Route exact path={`${match.path}/legal`} component={FormLegalPerson} />
        <Route render={() => <Redirect to={`${match.path}/natural`} />} />
      </Switch>
    </Content>
  </Container>
);

SignUp.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default SignUp;
