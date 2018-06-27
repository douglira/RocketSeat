import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';
import { toast } from 'react-toastify';

import { connect } from 'react-redux';
import { Creators as UsersActions } from 'store/ducks/users';

import { MAPBOX_TOKEN } from 'config/mapbox';

import Modal from 'components/Modal';
import Sidebar from 'components/Sidebar';

import { Container, IconUser } from './styles';

class Main extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    users: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        login: PropTypes.string,
        coords: PropTypes.shape({
          lng: PropTypes.number,
          lat: PropTypes.number,
        }),
      })),
    }).isRequired,
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
  };

  handleClick = (event) => {
    const { lngLat: coordinates } = event;

    this.setState({ modalVisible: true, coordinates });
  };

  initialLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const viewport = { ...this.state.viewport };
        viewport.latitude = pos.coords.latitude;
        viewport.longitude = pos.coords.longitude;

        this.setState({ viewport });
      },
      () => {
        this.setState({
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            latitude: -23.534698840340308,
            longitude: -46.21378454622057,
            zoom: 13,
          },
        });
      },
    );
  };

  handleModalOk = () => {
    const {
      modalInput: text,
      coordinates: [lng, lat],
    } = this.state;

    if (!text) {
      return toast.error('Preenchimento obrigatório');
    }

    this.props.addUserRequest(text, { lng, lat });

    return this.setState({ modalVisible: false, modalInput: '' });
  };

  handleModalCancel = () => {
    this.setState({ modalVisible: false });
  };

  focusOnMap = (coords) => {
    const viewport = { ...this.state.viewport };

    viewport.latitude = coords.lat;
    viewport.longitude = coords.lng;

    this.setState({ viewport });
  };

  renderMarkers = () =>
    !this.props.users.data.length ||
    this.props.users.data.map(user => (
      <Marker key={user.id} latitude={user.coords.lat} longitude={user.coords.lng}>
        <IconUser src={user.avatar} alt={user.login} />
      </Marker>
    ));

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
          mapStyle="mapbox://styles/mapbox/streets-v10"
          onClick={this.handleClick}
          ref={(map) => {
            this.map = map;
          }}
        >
          {this.renderMarkers()}
        </ReactMapGL>
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
