import React, { Component } from 'react';
import {
  View, ScrollView, Text, Image, TextInput, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { Creators as CartActions } from 'store/ducks/cart';

import ModalQuantity from './components/ModalQuantity';

import styles from './styles';

class Cart extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={26} color={tintColor} />,
  };

  static propTypes = {
    removeFromCart: PropTypes.func.isRequired,
    editQuantity: PropTypes.func.isRequired,
    subtotal: PropTypes.number.isRequired,
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        number: PropTypes.string,
        quantity: PropTypes.number,
      }),
    ).isRequired,
  };

  state = {
    visibleModal: false,
    productModal: null,
  };

  editQuantity = (product) => {
    this.setState({
      productModal: product,
      visibleModal: true,
    });
  };

  handleModalOk = (newQuantity) => {
    const { productModal } = this.state;
    const { editQuantity } = this.props;

    editQuantity(productModal, parseInt(newQuantity, 10));

    this.setState({
      visibleModal: false,
      productModal: null,
    });
  };

  handleModalCancel = () => {
    this.setState({
      visibleModal: false,
      productModal: null,
    });
  };

  render() {
    const { cart, subtotal, removeFromCart } = this.props;
    const { visibleModal } = this.state;

    return (
      <View style={styles.container}>
        <ModalQuantity
          visible={visibleModal}
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancel}
        />
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          {!cart.length ? (
            <Text style={styles.textEmptyCart}>
Seu carrinho está vazio
            </Text>
          ) : (
            cart.map(item => (
              <View key={item.id} style={styles.containerItem}>
                <Image
                  style={styles.image}
                  source={{ uri: item.image }}
                  resizeMethod="scale"
                  resizeMode="contain"
                />
                <View style={styles.containerInfo}>
                  <Text style={styles.name}>
                    {item.name}
                  </Text>
                  <Text style={styles.brand}>
                    {item.brand}
                  </Text>
                  <Text style={styles.price}>
                    {item.price}
                  </Text>
                </View>
                <View style={styles.containerButton}>
                  <TouchableOpacity style={styles.button} onPress={() => this.editQuantity(item)}>
                    <TextInput
                      style={styles.textQuantity}
                      editable={false}
                      underlineColorAndroid="transparent"
                      value={String(item.quantity)}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.containerButton}>
                  <TouchableOpacity style={styles.button} onPress={() => removeFromCart(item.id)}>
                    <Icon name="times" size={16} color={styles.iconColor.color} />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </ScrollView>
        <View style={styles.containerSubtotal}>
          <Text style={styles.textSubtotalTitle}>
Subtotal
          </Text>
          <Text style={styles.textSubtotal}>
            R$
            {subtotal.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  subtotal:
    cart.data.length
    && cart.data.reduce((subtotal, item) => subtotal + item.quantity * item.price, 0),
  cart: cart.data,
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(CartActions.removeFromCart(id)),
  editQuantity: (item, quantity) => dispatch(CartActions.addToCart(item, quantity)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
