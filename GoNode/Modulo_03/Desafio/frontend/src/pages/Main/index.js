import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from 'store/ducks/posts';
import { Creators as UserActions } from 'store/ducks/user';

import { socketConnect } from 'services/api';

import Header from 'components/Header';

import PostList from 'pages/PostList';
import Post from 'pages/Post';
import Profile from 'pages/Profile';
import FormChangePassword from 'pages/Profile/components/FormChangePass';

import { Container, MainContainer, Navegation } from './styles';

class Main extends Component {
  static propTypes = {
    realtimeAddPostRequest: PropTypes.func.isRequired,
    realtimeReplacePostRequest: PropTypes.func.isRequired,
    realtimeDeletePost: PropTypes.func.isRequired,
    postsRequest: PropTypes.func.isRequired,
    postsNotificationsRequest: PropTypes.func.isRequired,
    realtimeAddNotificationRequest: PropTypes.func.isRequired,
    location: PropTypes.shape().isRequired,
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    if (this.props.user.isAuthenticated) {
      const socket = socketConnect();
      this.props.postsRequest();
      this.props.postsNotificationsRequest();
      socket.on('posts.insert', (id) => {
        this.props.realtimeAddPostRequest(id);
      });
      socket.on('posts.edit', (id) => {
        this.props.realtimeReplacePostRequest(id);
      });
      socket.on('posts.delete', (id) => {
        this.props.realtimeDeletePost(id);
      });
      socket.on('post.notification.insert', (id) => {
        this.props.realtimeAddNotificationRequest(id);
      });
    }
  }

  render() {
    const { user, location } = this.props;
    if (!user.isAuthenticated) {
      return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
    }

    return (
      <Container>
        <MainContainer>
          <Header location={location} />
          <Navegation>
            <ul>
              <li>
                <NavLink to="/app">Feed</NavLink>
              </li>
              <li>
                <NavLink to={`/app/profile/${user.data._id}`}>Meu perfil</NavLink>
              </li>
              <li>
                <NavLink to="/app">Amigos</NavLink>
              </li>
            </ul>
          </Navegation>
          <Route exact path="/app" component={PostList} />
          <Route exact path="/app/profile/:id" component={Profile} />
          <Route exact path="/app/profile/:id/change_password" component={FormChangePassword} />
          <Route exact path="/app/posts/:id" component={Post} />
        </MainContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PostsActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
