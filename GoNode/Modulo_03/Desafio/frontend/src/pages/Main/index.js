import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Route, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from 'store/ducks/posts';
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
    location: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
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

  render() {
    return (
      <Container>
        <MainContainer>
          <Header location={this.props.location} />
          <Navegation>
            <ul>
              <li>
                <Link to="/">Feed</Link>
              </li>
              <li>
                <Link to="/profile">Meu perfil</Link>
              </li>
              <li>
                <Link to="/">Amigos</Link>
              </li>
              <li>
                <Link to="/">Pesquisar</Link>
              </li>
            </ul>
          </Navegation>
          <Route path="/app" component={PostList} />
          <Route path="/profile" component={Profile} />
        </MainContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => bindActionCreators(PostsActions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
