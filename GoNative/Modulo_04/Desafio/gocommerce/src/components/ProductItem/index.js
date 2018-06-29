import React from 'react';
import {
  TouchableOpacity, View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import { connect } from 'react-redux';

import styles from './styles';

const ProductItem = ({ product, loading }) => (
  <TouchableOpacity style={styles.container} key={product.id}>
    <View style={styles.content}>
      <ShimmerPlaceholder autoRun visible={!loading}>
        <Image style={styles.image} source={{ uri: product.image }} />
      </ShimmerPlaceholder>
      <ShimmerPlaceholder autoRun visible={!loading}>
        <Text style={styles.name}>
          {product.name}
        </Text>
      </ShimmerPlaceholder>
      <ShimmerPlaceholder autoRun visible={!loading}>
        <Text style={styles.brand}>
          {product.brand}
        </Text>
      </ShimmerPlaceholder>
      <ShimmerPlaceholder autoRun visible={!loading}>
        <Text style={styles.price}>
          {product.price}
        </Text>
      </ShimmerPlaceholder>
    </View>
  </TouchableOpacity>
);

ProductItem.propTypes = {
  loading: PropTypes.bool.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = ({ products }) => ({
  loading: products.loading,
});

export default connect(mapStateToProps)(ProductItem);
