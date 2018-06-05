import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';

import { Container } from './styles';

class Profile extends Component {
  static propTypes = {
    profileRequest: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.profileRequest(id);
  }

  render() {
    return (
      <Container>
        <h1>Meu Perfil</h1>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  me: state.user.data,
  user: state.user.userProfile,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile));
