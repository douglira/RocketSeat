import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'styles';
import styles from './styles';

class RepositoryItem extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      organization: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  showIssues = () => {
    const { repository } = this.props;

    this.props.navigation.navigate('Issues', { repository });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Image style={styles.avatar} source={{ uri: this.props.repository.avatar }} />
          <View style={styles.description}>
            <Text style={styles.infoRepo}>{this.props.repository.name}</Text>
            <Text style={styles.infoOrg}>{this.props.repository.organization}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={this.showIssues}>
          <Icon name="angle-right" size={20} color={colors.regular} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default RepositoryItem;
