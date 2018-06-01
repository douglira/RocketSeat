import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from 'store/ducks/posts';
import { socket } from 'services/api';

import PostItem from 'components/PostItem';

import { Container, MainContainer, Header } from './styles';

class Main extends Component {
  static propTypes = {
    addPost: PropTypes.func.isRequired,
    realtimeAddPost: PropTypes.func.isRequired,
    realtimeReplacePost: PropTypes.func.isRequired,
    realtimeDeletePost: PropTypes.func.isRequired,
    postsRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      data: PropTypes.shape({
        avatar_url: PropTypes.string,
        name: PropTypes.string,
      }),
    }).isRequired,
    posts: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
      })),
    }).isRequired,
  };

  state = {
    postInput: '',
  };

  componentDidMount() {
    this.props.postsRequest();
    socket.on('posts.insert', (data) => {
      this.props.realtimeAddPost(data);
      // console.log(data);
    });
    socket.on('posts.replace', (data) => {
      this.props.realtimeReplacePost(data);
      // console.log(data);
    });
    socket.on('posts.delete', (data) => {
      this.props.realtimeDeletePost(data);
      // console.log(data);
    });
  }

  handleAddPost = (e) => {
    e.preventDefault();

    if (!this.state.postInput) return;

    this.props.addPost(this.state.postInput);

    this.setState({ postInput: '' });
  };

  renderPosts = () => this.props.posts.data.map(post => <PostItem key={post._id} post={post} />);

  render() {
    return (
      <Container>
        <MainContainer>
          <Header>
            <div>
              <img src={this.props.user.data.avatar_url} alt={this.props.user.data.name} />
              <p>{this.props.user.data.name}</p>
            </div>
            <form onSubmit={this.handleAddPost}>
              <textarea
                placeholder="No que está pensando?"
                value={this.state.postInput}
                onChange={e => this.setState({ postInput: e.target.value })}
                draggable={false}
              />
              <button type="submit">Publicar</button>
            </form>
          </Header>
          {this.renderPosts()}
        </MainContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ user, posts }) => ({
  user,
  posts,
});

const mapDispatchToProps = dispatch => bindActionCreators(PostsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
