import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from 'store/ducks/posts';
import { socket } from 'services/api';

import PostItem from 'components/PostItem';
import Header from 'components/Header';

import { Container, MainContainer } from './styles';

class Main extends Component {
  static propTypes = {
    realtimeAddPost: PropTypes.func.isRequired,
    realtimeReplacePost: PropTypes.func.isRequired,
    realtimeDeletePost: PropTypes.func.isRequired,
    postsRequest: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape({
      postId: PropTypes.string,
    })).isRequired,
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

  renderPosts = () =>
    this.props.posts.map(item => <PostItem key={item.postId} postId={item.postId} />);

  render() {
    return (
      <Container>
        <MainContainer>
          <Header />
          {this.renderPosts()}
        </MainContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ user, posts }) => ({
  user,
  posts: posts.data.map(post => ({ postId: post._id })),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
