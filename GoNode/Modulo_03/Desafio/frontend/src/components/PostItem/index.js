import React from 'react';
import PropTypes from 'prop-types';

import { Post } from './styles';

const PostItem = ({ post }) => (
  <Post>
    <div>
      <img src={post.author.avatar_url} alt={post.author.name} />
      <p>{post.author.name}</p>
    </div>
    <p>{post.content}</p>
  </Post>
);

PostItem.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      avatar_url: PropTypes.string,
      name: PropTypes.string,
    }),
    content: PropTypes.string,
  }).isRequired,
};

export default PostItem;
