import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Container } from './styles';

const PostNotifications = ({ notifications }) => (
  <Container>
    {notifications.length === 0 ? (
      <p>Não há notificações</p>
    ) : (
      notifications.map(notification => (
        <section key={String(notification.id)}>
          <i className="fa fa-times" />
          <div>
            <img src={notification.from.avatar_url} alt={notification.from.name} />
            {notification.topic === 'like' ? (
              <span>
                <strong>{notification.from.name}</strong> curtiu sua publicação
              </span>
            ) : (
              <span>
                <strong>{notification.from.name}</strong> comentou em sua publicação
              </span>
            )}
          </div>
        </section>
      ))
    )}
  </Container>
);

PostNotifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    from: PropTypes.shape({
      avatar_url: PropTypes.string,
      name: PropTypes.string,
    }),
  })).isRequired,
};

const mapStateToProps = ({ posts }) => {
  const notifications = [];
  posts.notifications.forEach(notification =>
    posts.data.forEach((post) => {
      if (notification.post === post._id) {
        notifications.push({
          postId: post._id,
          topic: notification.topic,
          id: notification._id,
          from: notification.from,
        });
      }
    }));
  return {
    notifications,
  };
};

export default connect(mapStateToProps)(PostNotifications);
