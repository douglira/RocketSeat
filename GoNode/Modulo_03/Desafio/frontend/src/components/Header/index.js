import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from 'store/ducks/posts';

import { Container } from './styles';

class Header extends Component {
  static propTypes = {
    addPost: PropTypes.func.isRequired,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  };

  state = {
    inputPost: '',
  };

  handleAddPost = (e) => {
    e.preventDefault();

    if (!this.state.inputPost) return;

    this.props.addPost(this.state.inputPost);

    this.setState({ inputPost: '' });
  };

  render() {
    return (
      <Container>
        <div>
          <img src={this.props.user.avatar_url} alt={this.props.user.name} />
          <p>{this.props.user.name}</p>
        </div>
        <form onSubmit={this.handleAddPost}>
          <textarea
            placeholder="No que está pensando?"
            value={this.state.inputPost}
            onChange={e => this.setState({ inputPost: e.target.value })}
            draggable={false}
          />
          <button type="submit">Publicar</button>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
