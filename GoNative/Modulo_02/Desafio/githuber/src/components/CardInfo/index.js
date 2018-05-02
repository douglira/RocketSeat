import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'styles';
import styles from './styles';

class CardInfo extends Component {
  static propTypes = {
    information: PropTypes.shape({
      avatar: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  showIssues = () => {
    const { information } = this.props;

    this.props.navigation.navigate('Issues', { information });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Image style={styles.avatar} source={{ uri: this.props.information.avatar }} />
          <View style={styles.description}>
            <Text style={styles.infoTitle}>{this.props.information.title}</Text>
            <Text style={styles.infoSubtitle}>{this.props.information.subtitle}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={this.showIssues}>
          <Icon name="angle-right" size={20} color={colors.regular} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default CardInfo;
