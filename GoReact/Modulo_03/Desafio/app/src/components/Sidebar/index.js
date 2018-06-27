import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Creators as UsersActions } from 'store/ducks/users';

import { Container, Actions, Button } from './styles';

class Sidebar extends Component {
  static propTypes = {
    removeUser: PropTypes.func.isRequired,
    focusOnMap: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      login: PropTypes.string,
      avatar: PropTypes.string,
    })).isRequired,
  };

  handleRemove = (id) => {
    this.props.removeUser(id);
  };

  render() {
    return (
      <Container>
        <nav>
          {this.props.users.length > 0 ? (
            this.props.users.map(user => (
              <li key={String(user.id)}>
                <img src={user.avatar} alt={user.login} />
                <section>
                  <strong>{user.name}</strong>
                  <span>{user.login}</span>
                </section>
                <Actions>
                  <Button danger onClick={() => this.handleRemove(user.id)}>
                    <i className="fa fa-times-circle" />
                  </Button>
                  <Button onClick={() => this.props.focusOnMap(user.coordinates)}>
                    <i className="fa fa-angle-right" />
                  </Button>
                </Actions>
              </li>
            ))
          ) : (
            <p>Clique no mapa para adicionar um usuário</p>
          )}
        </nav>
      </Container>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: users.data,
});

const mapDispatchToProps = dispatch => ({
  removeUser: id => dispatch(UsersActions.removeUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
