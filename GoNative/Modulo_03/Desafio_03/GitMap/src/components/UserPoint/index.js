import React from 'react';
import { Image, Text } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import PropTypes from 'prop-types';

import { TOKEN } from 'config/MapboxConfig';

import styles from './styles';

MapboxGL.setAccessToken(TOKEN);

const UserPoint = ({ user }) => (
  <MapboxGL.PointAnnotation
    key={String(user.id)}
    id={String(user.id)}
    coordinate={user.coordinates}
  >
    <Image style={styles.avatar} source={{ uri: user.avatar_url }} />
    <MapboxGL.Callout containerStyle={styles.calloutContainer}>
      <Text style={styles.calloutTitle}>{user.name}</Text>
      <Text style={styles.calloutSubtitle}>{user.bio}</Text>
    </MapboxGL.Callout>
  </MapboxGL.PointAnnotation>
);

UserPoint.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    bio: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default UserPoint;
