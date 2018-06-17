import React from 'react';
import PropTypes from 'prop-types';

import PostItem from 'components/PostItem';
import { Container } from './styles';

const Post = ({ match }) => (
  <Container>
    <PostItem postId={match.params.id} />
  </Container>
);

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Post;
