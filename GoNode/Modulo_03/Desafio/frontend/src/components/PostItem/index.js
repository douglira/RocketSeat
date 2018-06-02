import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from 'store/ducks/posts';

import { Post, PostInteractions } from './styles';

class PostItem extends Component {
  static propTypes = {
    toggleLikeRequest: PropTypes.func.isRequired,
    post: PropTypes.shape({
      _id: PropTypes.stirng,
      author: PropTypes.shape({
        avatar_url: PropTypes.string,
        name: PropTypes.string,
      }),
      content: PropTypes.string,
    }).isRequired,
    user: PropTypes.shape({
      _id: PropTypes.string,
    }).isRequired,
    likesCount: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
  };

  state = {
    isLiked: 'false',
  };

  componentDidMount() {
    this.isLikedStyle();
  }

  handleToggleLike = () => {
    this.props.toggleLikeRequest(this.props.post._id);
  };

  isLikedStyle = () => {
    const { post, user } = this.props;
    const index = post.likes.indexOf(String(user._id));
    const isLiked = index === 1;

    this.setState({ isLiked: String(isLiked) });
  };

  render() {
    const { post, likesCount, commentsCount } = this.props;

    return (
      <Post>
        <div>
          <img src={post.author.avatar_url} alt={post.author.name} />
          <p>{post.author.name}</p>
        </div>
        <p>{post.content}</p>
        <PostInteractions>
          <button onClick={this.handleToggleLike}>
            <span>{likesCount}</span>{' '}
            <i className={this.state.isLiked ? 'fa fa-thumbs-o-up' : 'fa fa-thumbs-up'} />
          </button>
          <button>
            <span>{commentsCount}</span> <i className="fa fa-comments-o" />
          </button>
        </PostInteractions>
      </Post>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.data.find(postState => postState._id === ownProps.postId);
  const likesCount = post.likes.length;
  const commentsCount = post.comments.length;
  return {
    user: state.user.data,
    post,
    likesCount,
    commentsCount,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(PostsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
