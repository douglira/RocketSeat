import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './styles';

const HeaderIssues = ({
  avatar, name, login, onSelect,
}) => (
  <Header>
    <div>
      <img src={avatar} alt={login} />
      <div>
        <span>{name}</span>
        <small>{login}</small>
      </div>
    </div>
    <select onChange={onSelect}>
      <option defaultValue value="all">
        Todas
      </option>
      <option value="open">Abertas</option>
      <option value="closed">Fechadas</option>
    </select>
  </Header>
);

HeaderIssues.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default HeaderIssues;
