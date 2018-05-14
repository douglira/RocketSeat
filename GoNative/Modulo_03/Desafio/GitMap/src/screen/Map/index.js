import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import PropTypes from 'prop-types';

import { TOKEN } from 'config/MapboxConfig';

import NewLocationModal from 'components/NewLocationModal';
import UserPoint from 'components/UserPoint';

import styles from './styles';

MapboxGL.setAccessToken(TOKEN);

class Map extends Component {
  static propTypes = {
    users: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisibility: false,
      coordinates: [],
    };
  }

  showModal = ({ geometry: { coordinates } }) => {
    const { modalVisibility } = this.state;

    this.setState({
      coordinates,
      modalVisibility: !modalVisibility,
    });
  }

  renderPoints = () => this.props.users.data.map(user => <UserPoint key={user.id} user={user} />)

  render() {
    return (
      <View style={styles.container}>
        <NewLocationModal
          visible={this.state.modalVisibility}
          close={() => this.setState({ modalVisibility: false })}
          coordinates={this.state.coordinates}
        />
        <MapboxGL.MapView
          style={styles.map}
          zoomLevel={15}
          centerCoordinate={[-46.2040217, -23.5427804]}
          logoEnabled={false}
          attributionEnabled={false}
          onLongPress={this.showModal}
        >
          { this.props.users.data.length > 0
            ? this.renderPoints()
            : null}
        </MapboxGL.MapView>
      </View>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Map);
