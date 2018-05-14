import React, { Component } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Creators as UsersActions } from 'store/ducks/users';

import styles from './styles';

class NewLocationModal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    addUser: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
  }

  static defaultProps = {
    errorMessage: null,
  }

  state = {
    githubUser: '',
  }

  close = () => {
    this.props.close();
    this.setState({ githubUser: '' });
  }

  addUser = () => {
    const { coordinates } = this.props;
    const user = this.state.githubUser;

    this.props.addUser({
      user,
      coordinates,
      onSuccess: () => {
        this.props.close();
        this.setState({ githubUser: '' });
      },
    });
  }

  renderForm = () => (
    <View style={styles.boxContainer}>
      <Text style={styles.title}>Adicionar um novo local</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        autoFocus
        placeholder="Usuário no Github"
        value={this.state.githubUser}
        onChangeText={githubUser => this.setState({ githubUser })}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonCancel]}
          onPress={this.close}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSave]}
          onPress={this.addUser}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  render() {
    return (
      <Modal
        animationType="fade"
        transparent
        onRequestClose={() => {
          this.setState({ githubUser: '' });
        }}
        visible={this.props.visible}
      >
        <View style={styles.modalContainer}>
          { !!this.props.errorMessage && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{this.props.errorMessage}</Text>
            </View>
            )}

          { this.props.loading
            ? <ActivityIndicator size="large" color={styles.loading.color} />
            : this.renderForm()}
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = ({ users: { loading, errorMessage } }) => ({
  loading,
  errorMessage,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewLocationModal);
