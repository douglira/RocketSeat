import React from 'react';

import { Container, SideBar } from './styles';

const Main = () => (
  <Container>
    <SideBar>
      <form>
        <input type="text" placeholder="Novo repositório" />
        <button type="submit">
          <i className="fa fa-plus-circle" />
        </button>
      </form>
    </SideBar>
  </Container>
);

export default Main;
