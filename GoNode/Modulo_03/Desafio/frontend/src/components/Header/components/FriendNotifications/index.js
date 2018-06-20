import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as NotificationActions } from 'store/ducks/notification';

import { api } from 'services/api';
import { Container, Actions } from './styles';

class FriendNotifications extends Component {
  static propTypes = {
    pushNotification: PropTypes.func.isRequired,
    onSelected: PropTypes.func.isRequired,
    friendsRequest: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      avatar_url: PropTypes.string,
      name: PropTypes.string,
    })).isRequired,
  };

  acceptRequest = async (id) => {
    try {
      await api.post(`/friend/${id}`);
      this.props.onSelected();
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

  declineRequest = async (id) => {
    try {
      await api.put(`/friend/${id}/request/decline`);
      this.props.onSelected();
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

  render() {
    const { friendsRequest } = this.props;

    return (
      <Container>
        {friendsRequest.length === 0 ? (
          <p>Não há notificações</p>
        ) : (
          friendsRequest.map(friend => (
            <section key={String(friend._id)}>
              <div>
                <img src={friend.avatar_url} alt={friend.name} />
                <span>
                  <strong>{friend.name}</strong> enviou uma solicitação de amizade
                </span>
              </div>
              <Actions>
                <Tooltip title="Aceitar" placement="bottomRight">
                  <button onClick={() => this.acceptRequest(friend._id)}>
                    <i className="fa fa-check-circle fa-lg" style={{ color: '#15d8a5' }} />
                  </button>
                </Tooltip>
                <Tooltip title="Recusar" placement="bottomRight">
                  <button onClick={() => this.declineRequest(friend._id)}>
                    <i className="fa fa-times-circle fa-lg" style={{ color: 'tomato' }} />
                  </button>
                </Tooltip>
              </Actions>
            </section>
          ))
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  friendsRequest: user.data.friendsRequest,
});

const mapDispatchToProps = dispatch => bindActionCreators(NotificationActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendNotifications);
