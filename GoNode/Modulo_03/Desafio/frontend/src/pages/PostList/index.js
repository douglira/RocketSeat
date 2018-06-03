import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import PostItem from 'components/PostItem';

import { Container } from './styles';

const PostList = ({ posts }) => (
  <Container>{posts.map(item => <PostItem key={Math.random()} postId={item.postId} />)}</Container>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = ({ posts }) => ({
  posts: posts.data.map(post => ({ postId: post._id })),
});

export default withRouter(connect(mapStateToProps)(PostList));
