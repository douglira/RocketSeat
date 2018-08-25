import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route, Redirect, Link,
} from 'react-router-dom';

import { Drawer } from '@material-ui/core';

import {
  Container, HeaderAdmin, DrawerOptionsContainer, MenuButton,
} from './styles';

import Home from './pages/Home';
import Categories from './pages/Categories';

class Admin extends Component {
  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string,
    }).isRequired,
  };

  state = {
    toggleDrawer: false,
    drawerOptions: [
      {
        label: 'Relatório de usuários',
        path: '/admin/home',
        icon: 'fa fa-users',
        key: 'userReport',
      },
      {
        label: 'Painel de Categorias',
        path: '/admin/categories',
        icon: 'fa fa-list-alt',
        key: 'categoriesPanel',
      },
    ],
  };

  toggleDrawer = open => () => {
    this.setState({
      toggleDrawer: open,
    });
  };

  renderDrawerOptions = () => (
    <DrawerOptionsContainer>
      <nav>
        {this.state.drawerOptions.map(option => (
          <button type="button" onClick={this.toggleDrawer(false)} key={option.key}>
            <i className={option.icon} />
            <Link to={option.path}>{option.label}</Link>
          </button>
        ))}
      </nav>
    </DrawerOptionsContainer>
  );

  render() {
    const { match } = this.props;
    const { toggleDrawer } = this.state;

    return (
      <Container>
        <MenuButton type="button" onClick={this.toggleDrawer(true)}>
          <i className={!toggleDrawer ? 'fa fa-angle-double-down' : 'fa fa-angle-double-up'} />
        </MenuButton>
        <HeaderAdmin>
          <i className="fa fa-cog fa-2x" />
          <p>Área de Administrador</p>
        </HeaderAdmin>
        <Drawer anchor="top" open={toggleDrawer} onClose={this.toggleDrawer(false)}>
          {this.renderDrawerOptions()}
        </Drawer>
        <Switch>
          <Route exact path={`${match.path}/home`} component={Home} />
          <Route exact path={`${match.path}/categories`} component={Categories} />
          <Route render={() => <Redirect to={`${match.path}`} />} />
        </Switch>
      </Container>
    );
  }
}

export default Admin;
