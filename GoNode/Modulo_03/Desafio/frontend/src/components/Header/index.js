import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Popover, Tooltip } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from 'store/ducks/posts';
import { Creators as UserActions } from 'store/ducks/user';

import { ContainerInfo, Container } from './styles';

class Header extends Component {
  static propTypes = {
    addPost: PropTypes.func.isRequired,
    signoutRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func,
    }).isRequired,
  };

  state = {
    form: {
      post: '',
    },
    notifierPosts: false,
    notifierFriendsRequest: false,
  };

  handleAddPost = (e) => {
    e.preventDefault();
    const { post } = this.state.form;

    if (!post) return;

    this.props.addPost(post);

    this.setState({ form: { post: '' } });
  };

  handleSignout = () => {
    const { history } = this.props;

    this.props.signoutRequest({
      redirect: () => history.replace('/login'),
    });
  };

  handleChange = fieldname => (event) => {
    const form = { ...this.state.form };
    form[fieldname] = event.target.value;
    this.setState({ form });
  };

  handlePostNotifierClick = (visible) => {
    this.setState({ notifierPosts: visible });
  };

  handleFriendNotifierClick = (visible) => {
    this.setState({ notifierFriendsRequest: visible });
  };

  render() {
    const { location } = this.props;

    return (
      <Container>
        <nav>
          <Popover
            content={<p>Silvana Lira</p>}
            title="Solicitações"
            trigger="click"
            visible={this.state.notifierPosts}
            onVisibleChange={this.handlePostNotifierClick}
            placement="bottomRight"
            arrowPointAtCenter
          >
            <button>
              <Tooltip
                mouseEnterDelay={0.15}
                placement="bottomRight"
                arrowPointAtCenter
                title="Solicitações de amizade"
              >
                <i className="fa fa-user-plus" />
              </Tooltip>
              <span>2</span>
            </button>
          </Popover>
          <Popover
            content={<p>Silvana Lira</p>}
            title="Suas postagens"
            trigger="click"
            visible={this.state.notifierFriendsRequest}
            onVisibleChange={this.handleFriendNotifierClick}
            placement="bottomRight"
            arrowPointAtCenter
          >
            <button>
              <Tooltip
                mouseEnterDelay={0.15}
                placement="bottomRight"
                arrowPointAtCenter
                title="Notificações"
              >
                <i className="fa fa-bell-o" />
              </Tooltip>
              <span>2</span>
            </button>
          </Popover>
          <button onClick={this.handleSignout}>
            <Tooltip mouseEnterDelay={0.15} placement="bottomRight" arrowPointAtCenter title="Sair">
              <i className="fa fa-sign-out" />
            </Tooltip>
          </button>
        </nav>
        <ContainerInfo>
          <div>
            <img src={this.props.user.avatar_url} alt={this.props.user.name} />
            <p>{this.props.user.name}</p>
          </div>
          {location.pathname === '/app/profile' || (
            <form onSubmit={this.handleAddPost}>
              <textarea
                placeholder="No que está pensando?"
                value={this.state.form.post}
                onChange={this.handleChange}
                draggable={false}
              />
              <button type="submit">Publicar</button>
            </form>
          )}
        </ContainerInfo>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserActions, ...PostActions }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
