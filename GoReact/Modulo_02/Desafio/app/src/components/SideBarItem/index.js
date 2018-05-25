import React from 'react';
import PropTypes from 'prop-types';

import { Anchor } from './styles';

const SideBarItem = props => (
  <Anchor onClick={() => props.onSeeInfo(props.repository)}>
    <img src={props.repository.owner.avatar_url} alt={props.repository.owner.login} />
    <div>
      <span>{props.repository.name}</span>
      <small>{props.repository.owner.login}</small>
    </div>
    <button>
      <i className="fa fa-angle-right" />
    </button>
  </Anchor>
);

SideBarItem.propTypes = {
  repository: PropTypes.shape({
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
    name: PropTypes.string,
  }).isRequired,
  onSeeInfo: PropTypes.func.isRequired,
};

export default SideBarItem;
