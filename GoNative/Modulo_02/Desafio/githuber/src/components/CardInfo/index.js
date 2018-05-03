import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'styles';
import styles from './styles';

const CardInfo = ({
  avatar, title, subtitle, onPress,
}) => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <View style={styles.description}>
        <Text style={styles.infoTitle}>
          {title.length > 25 ? `${title.substring(0, 25)}...` : title}
        </Text>
        <Text style={styles.infoSubtitle}>{subtitle}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Icon name="angle-right" size={20} color={colors.regular} />
    </TouchableOpacity>
  </View>
);

CardInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CardInfo;
