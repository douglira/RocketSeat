import React from 'react';
import {
  TouchableOpacity, View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ProductItem = ({ product }) => (
  <TouchableOpacity style={styles.container} key={product.id}>
    <View style={styles.content}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.name}>
        {product.name}
      </Text>
      <Text style={styles.brand}>
        {product.brand}
      </Text>
      <Text style={styles.price}>
        {product.price}
      </Text>
    </View>
  </TouchableOpacity>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductItem;
