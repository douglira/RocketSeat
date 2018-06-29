import React from 'react';
import {
  TouchableOpacity, View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ProductItem = ({ navigation, product }) => (
  <TouchableOpacity
    style={styles.container}
    key={product.id}
    onPress={() => navigation.navigate('Details', { product })}
  >
    <View style={styles.content}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.name}>
        {product.name}
      </Text>
      <Text style={styles.brand}>
        {product.brand}
      </Text>
      <Text style={styles.price}>
R$
        {product.price}
      </Text>
    </View>
  </TouchableOpacity>
);

ProductItem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductItem;
