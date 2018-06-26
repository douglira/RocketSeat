import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL from 'react-map-gl';

import { connect } from 'react-redux';
import { Creators as UsersActions } from 'store/ducks/users';

import { MAPBOX_TOKEN } from 'config/mapbox';

import Modal from 'components/Modal';
import Sidebar from 'components/Sidebar';

import { Container } from './styles';

class Main extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 0,
        longitude: 0,
        zoom: 15,
      },
      modalVisible: false,
      modalInput: '',
      coordinates: null,
    };

    window.addEventListener('resize', this.onResize);
  }

  componentDidMount() {
    this.initialLocation();
  }

  onResize = () => {
    const viewport = { ...this.state.viewport };
    viewport.width = window.innerWidth;
    viewport.height = window.innerHeight;

    this.setState({ viewport });
  }

  handleClick = (event) => {
    const { lngLat: coordinates } = event;

    this.setState({ modalVisible: true, coordinates });
  };

  initialLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const viewport = { ...this.state.viewport };
      viewport.latitude = pos.coords.latitude;
      viewport.longitude = pos.coords.longitude;

      this.setState({ viewport });
    });
  };

  handleModalOk = () => {
    const { modalInput: text, coordinates } = this.state;

    this.props.addUserRequest(text, coordinates);

    this.setState({ modalVisible: false, modalInput: '' });
  };

  handleModalCancel = () => {
    this.setState({ modalVisible: false });
  };

  focusOnMap = (coordinates) => {
    console.log(coordinates);
  };

  render() {
    return (
      <Container>
        <Modal
          show={this.state.modalVisible}
          value={this.state.modalInput}
          onChange={e => this.setState({ modalInput: e.target.value })}
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancel}
        />
        <Sidebar focusOnMap={this.focusOnMap} />
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onClick={this.handleClick}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = dispatch => ({
  addUserRequest: (text, coordinates) => dispatch(UsersActions.addUserRequest(text, coordinates)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
