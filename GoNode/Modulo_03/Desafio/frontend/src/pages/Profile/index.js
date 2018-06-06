import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';

import FormEdit from './components/FormEdit';

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

  state = {
    form: {
      isDisabled: true,
    },
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.profileRequest(id);
  }

  render() {
    return (
      <Container>
        <FormEdit isDisabled={this.state.form.isDisabled} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  me: state.user.data,
  user: state.user.info,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile));
