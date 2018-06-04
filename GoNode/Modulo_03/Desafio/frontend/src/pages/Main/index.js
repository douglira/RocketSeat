import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from 'store/ducks/posts';
import { Creators as UserActions } from 'store/ducks/user';

import { socket } from 'services/api';

import Header from 'components/Header';

import PostList from 'pages/PostList';
import Profile from 'pages/Profile';

import { Container, MainContainer, Navegation } from './styles';

class Main extends Component {
  static propTypes = {
    realtimeAddPost: PropTypes.func.isRequired,
    realtimeReplacePost: PropTypes.func.isRequired,
    realtimeDeletePost: PropTypes.func.isRequired,
    postsRequest: PropTypes.func.isRequired,
    location: PropTypes.shape().isRequired,
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    if (this.props.user.isAuthenticated) {
      this.props.postsRequest();
      socket.on('posts.insert', (data) => {
        this.props.realtimeAddPost(data);
        // console.log(data);
      });
      socket.on('posts.edit', (data) => {
        this.props.realtimeReplacePost(data);
      });
      socket.on('posts.delete', (data) => {
        this.props.realtimeDeletePost(data);
        // console.log(data);
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
                <NavLink to="/app/profile">Meu perfil</NavLink>
              </li>
              <li>
                <NavLink to="/app">Amigos</NavLink>
              </li>
              <li>
                <NavLink to="/app">Pesquisar</NavLink>
              </li>
            </ul>
          </Navegation>
          <Route exact path="/app" component={PostList} />
          <Route path="/app/profile" component={Profile} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
