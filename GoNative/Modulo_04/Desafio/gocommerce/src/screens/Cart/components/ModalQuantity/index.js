import React, { Component } from 'react';
import {
  View, Text, Modal, TextInput, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class ModalQuantity extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  };

  state = {
    input: '',
  };

  onOk = () => {
    const { onOk } = this.props;
    const { input } = this.state;
    onOk(input);
    this.setState({ input: '' });
  };

  onCancel = () => {
    const { onCancel } = this.props;
    onCancel();
    this.setState({ input: '' });
  };

  render() {
    const { visible } = this.props;
    const { input } = this.state;

    return (
      <Modal animationType="slide" visible={visible} transparent onRequestClose={() => {}}>
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.containerInput}>
              <Text style={styles.label}>
Qtd.
              </Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                autoFocus
                placeholder="Quantidade"
                value={input}
                onChangeText={text => this.setState({ input: text })}
              />
            </View>
            <View style={styles.containerButtons}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={this.onCancel}
              >
                <Text style={styles.textButton}>
VOLTAR
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonSuccess]} onPress={this.onOk}>
                <Text style={styles.textButton}>
OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalQuantity;
