import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Creators as UserActions } from '~/store/ducks/user';

import { Menu, MenuItem } from '@material-ui/core';

import { Container, MenuItemText } from './styles';

class HeaderActions extends Component {
  static propTypes = {
    signout: PropTypes.func.isRequired,
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool,
      displayName: PropTypes.string,
      role: PropTypes.string,
    }).isRequired,
  };

  state = {
    anchorEl: null,
    options: [{ key: 'signout', text: 'Sair' }],
  };

  isAdmin = () => {
    const { user } = this.props;
    return user.role === 'admin' && ' (administrador)';
  };

  handleMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuSelect = (selectedKey) => {
    const { signout } = this.props;

    switch (selectedKey) {
      case 'signout':
        signout();
        break;
      default:
        break;
    }

    this.handleMenuClose();
  };

  renderMenu = () => {
    const { anchorEl, options } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Fragment>
        <button type="button" onClick={this.handleMenuOpen}>
          <i className="fa fa-angle-down" />
        </button>
        <Menu
          id="menu-user-options"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleMenuClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: 100,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option.key} onClick={() => this.handleMenuSelect(option.key)}>
              <MenuItemText>{option.text}</MenuItemText>
            </MenuItem>
          ))}
        </Menu>
      </Fragment>
    );
  };

  render() {
    const { user } = this.props;

    return (
      <Container>
        {user.isAuthenticated ? (
          <p>
            Olá, <strong>{user.displayName}</strong>
            {this.isAdmin()} {this.renderMenu()}
          </p>
        ) : (
          <Link to="/signin">Minha conta</Link>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: {
    isAuthenticated: state.user.isAuthenticated,
    role: state.user.data.role,
    displayName: state.user.data.displayName,
  },
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(UserActions.signout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderActions);
