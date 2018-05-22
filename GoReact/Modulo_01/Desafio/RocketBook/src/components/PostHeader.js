import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ author, avatar, time }) => (
  <div className="post-header">
    <img src={avatar} alt={author} />
    <div className="post-header__info">
      <div className="post-author">{author}</div>
      <div className="post-time">{time}</div>
    </div>
  </div>
);

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
