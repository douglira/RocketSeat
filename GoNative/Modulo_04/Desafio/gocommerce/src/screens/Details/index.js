import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Creators as CartActions } from 'store/ducks/cart';

import styles from './styles';

const Details = ({ navigation, addToCart }) => {
  const product = navigation.getParam('product');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: product.image }}
          resize="scale"
          resizeMode="contain"
        />
        <View style={styles.containerInfo}>
          <View style={styles.info}>
            <Text style={styles.textName}>
              {product.name}
            </Text>
            <Text style={styles.textBrand}>
              {product.brand}
            </Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.textPrice}>
              R$
              {product.price}
            </Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.contentButton} onPress={() => addToCart(product)}>
            <Text style={styles.textAddToCart}>
Adicionar no carrinho
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

Details.navigationOptions = {
  title: 'Detalhes do produto',
};

Details.propTypes = {
  addToCart: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    getParams: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(CartActions.addToCart(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Details);
