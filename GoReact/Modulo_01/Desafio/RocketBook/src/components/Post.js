import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = ({ data }) => (
  <div className="post">
    <PostHeader avatar={data.avatar} author={data.author} time={data.createdAt} />
    <p className="post-content">{data.content}</p>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    author: PropTypes.string,
    createdAt: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
