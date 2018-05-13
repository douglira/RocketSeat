import React from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import { TOKEN } from 'config/MapBoxConfig';
import styles from './styles';

MapboxGL.setAccessToken(TOKEN);

const Map = () => (
  <View style={styles.container}>
    <MapboxGL.MapView
      zoomLevel={15}
      centerCoordinate={[11.256, 43.770]}
      style={styles.container}
    />
  </View>
);

export default Map;
