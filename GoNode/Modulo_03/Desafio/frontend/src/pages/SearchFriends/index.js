import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as NotificationActions } from 'store/ducks/notification';

import { api } from 'services/api';

import { Container, FormSearch } from './styles';

class SearchFriends extends Component {
  static propTypes = {
    pushNotification: PropTypes.func.isRequired,
  };

  state = {
    users: [],
    searchInput: '',
    loading: false,
  };

  search = async (e) => {
    if (e) e.preventDefault();
    const { searchInput: search } = this.state;

    if (!search.length) return;

    this.setState({ loading: true });

    try {
      const { data: users } = await api.get('/users', { params: { search } });

      this.setState({ users });
    } catch (err) {
      this.props.pushNotification({ topic: 'error', text: 'Não foi possível realizar a busca' });
    } finally {
      this.setState({ loading: false });
    }
  };

  removeFriend = async (friendId) => {
    try {
      await api.delete(`/friend/${friendId}`);
      this.search();
      this.props.pushNotification({
        text: 'Agora vocês não são mais amigos',
        topic: 'success',
      });
    } catch (err) {
      if (err.response.data && err.response.data.error) {
        this.props.pushNotification({ text: err.response.data.error, topic: 'error' });
        return;
      }
      this.props.pushNotification({
        text: 'Não foi possível remover amizade',
        topic: 'error',
      });
    }
  };

  acceptFriendRequest = async (id) => {
    try {
      await api.post(`/friend/${id}`);
      this.search();
      this.props.pushNotification({
        text: 'Agora vocês são amigos',
        topic: 'success',
      });
    } catch (err) {
      if (err.response.data && err.response.data.error) {
        this.props.pushNotification({ text: err.response.data.error, topic: 'error' });
        return;
      }
      this.props.pushNotification({
        text: 'Não foi possível aceitar a solicitação de amizade. Tente novamente',
        topic: 'error',
      });
    }
  };

  declineFriendRequest = async (id) => {
    try {
      await api.put(`/friend/${id}/request/decline`);
      this.search();
    } catch (err) {
      if (err.response.data && err.response.data.error) {
        this.props.pushNotification({ text: err.response.data.error, topic: 'error' });
        return;
      }
      this.props.pushNotification({
        text: 'Não foi possível recusar ou cancelar a solicitação de amizade. Tente novamente',
        topic: 'error',
      });
    }
  };

  sendFriendRequest = async (id) => {
    try {
      await api.post(`/friend/${id}/request`);
      this.search();
      this.props.pushNotification({
        text: 'Solicitação de amizade enviada com sucesso',
        topic: 'success',
      });
    } catch (err) {
      if (err.response.data && err.response.data.error) {
        this.props.pushNotification({ text: err.response.data.error, topic: 'error' });
        return;
      }
      this.props.pushNotification({
        text: 'Não foi possível recusar a solicitação de amizade. Tente novamente',
        topic: 'error',
      });
    }
  };

  renderActions = (user) => {
    switch (user.status) {
      case 'friend':
        return (
          <Fragment>
            <Tooltip title="Desfazer amizade" placement="left">
              <button onClick={() => this.removeFriend(user._id)}>
                <i className="fa fa-user-times fa-lg" style={{ color: 'tomato' }} />
              </button>
            </Tooltip>
          </Fragment>
        );
      case 'request_received':
        return (
          <Fragment>
            <Tooltip title="Aceitar" placement="left">
              <button onClick={() => this.acceptFriendRequest(user._id)}>
                <i className="fa fa-check fa-lg" style={{ color: '#15d8a5' }} />
              </button>
            </Tooltip>
            <Tooltip title="Recusar" placement="left">
              <button onClick={() => this.declineFriendRequest(user._id)}>
                <i className="fa fa-minus fa-lg" style={{ color: 'tomato' }} />
              </button>
            </Tooltip>
          </Fragment>
        );
      case 'request_sent':
        return (
          <Fragment>
            <Tooltip title="Cancelar solicitação" placement="left">
              <button onClick={() => this.declineFriendRequest(user._id)}>
                <i className="fa fa-undo fa-lg" style={{ color: 'tomato' }} />
              </button>
            </Tooltip>
          </Fragment>
        );

      default:
        return (
          <Fragment>
            <Tooltip title="Enviar solicitação de amizade" placement="left">
              <button onClick={() => this.sendFriendRequest(user._id)}>
                <i className="fa fa-user-plus fa-lg" style={{ color: '#15d8a5' }} />
              </button>
            </Tooltip>
          </Fragment>
        );
    }
  };

  render() {
    return (
      <Container>
        <FormSearch onSubmit={this.search}>
          <input
            type="search"
            placeholder="Buscar por nome, cidade..."
            value={this.state.searchInput}
            onChange={e => this.setState({ searchInput: e.target.value })}
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </FormSearch>
        {this.state.loading ? (
          <i className="fa fa-spinner fa-pulse fa-lg" />
        ) : (
          this.state.users.map(user => (
            <section key={String(user._id)}>
              <div>
                <img src={user.avatar_url} alt={user.name} />
                <div>
                  <strong>{user.name}</strong>
                  <span>
                    {user.commonFriends.count} {user.commonFriends.count === 1 ? 'amigo' : 'amigos'}{' '}
                    em comum
                  </span>
                </div>
                {this.renderActions(user)}
              </div>
            </section>
          ))
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  me: state.user.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(NotificationActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFriends);
