import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';

const Profile = () => (
  <Container>
    <h1>Meu Perfil</h1>
  </Container>
);

export default withRouter(Profile);
