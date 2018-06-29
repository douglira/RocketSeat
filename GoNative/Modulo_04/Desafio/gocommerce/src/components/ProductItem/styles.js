import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: metrics.screenWidth / 2 - 35,
    marginTop: 10,
  },

  content: {
    flex: 1,
    backgroundColor: colors.white,
    padding: metrics.basePadding / 2,
  },

  image: {
    height: 180,
    alignSelf: 'stretch',
  },

  name: {
    fontSize: 14,
    color: colors.darker,
    fontWeight: 'bold',
    marginTop: metrics.baseMargin / 5,
  },

  brand: {
    fontSize: 11,
    color: colors.regular,
    marginTop: metrics.baseMargin / 5,
  },

  price: {
    fontSize: 14,
    color: colors.secundary,
    fontWeight: 'bold',
    marginTop: metrics.baseMargin / 5,
  },
});

export default styles;
