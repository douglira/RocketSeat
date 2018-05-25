import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Issues } from './styles';

class InfoIssues extends Component {
  static propTypes = {
    issues: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      html_url: PropTypes.string,
      user: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
      }),
    })).isRequired,
  };

  renderIssues = () =>
    this.props.issues.map(repo => (
      <div key={repo.id}>
        <img src={repo.user.avatar_url} alt={repo.user.login} />
        <section>
          <span>{repo.title.length > 20 ? `${repo.title.substring(0, 20)}...` : repo.title}</span>
          <small>{repo.user.login}</small>
          <a target="_blank" href={repo.html_url}>
            <i className="fa fa-external-link" />
            <strong>Abrir Issue</strong>
          </a>
        </section>
      </div>
    ));

  render() {
    return (
      <Container>
        <Issues>{this.renderIssues()}</Issues>
      </Container>
    );
  }
}

export default InfoIssues;
