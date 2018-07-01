import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    padding: metrics.basePadding,
    backgroundColor: colors.background,
  },

  textEmptyCart: {
    alignSelf: 'center',
    fontSize: 18,
    color: colors.light,
  },

  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: metrics.basePadding / 2,
    marginBottom: metrics.baseMargin,
  },

  image: {
    flex: 1,
    height: 60,
  },

  containerInfo: {
    flex: 4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: metrics.baseMargin,
  },

  name: {
    fontSize: 14,
    color: colors.darker,
    fontWeight: 'bold',
    paddingVertical: 1,
  },

  brand: {
    fontSize: 11,
    color: colors.light,
    paddingVertical: 1,
  },

  price: {
    fontSize: 14,
    color: colors.secundary,
    fontWeight: 'bold',
    paddingVertical: 1,
  },

  containerButton: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.basePadding / 4,
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: metrics.baseMargin,
  },

  textQuantity: {
    fontSize: 14,
    color: colors.regular,
    borderWidth: 0.7,
    borderColor: colors.light,
    paddingVertical: 0,
  },

  iconColor: {
    color: colors.regular,
  },

  containerSubtotal: {
    height: 100,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.basePadding,
  },

  textSubtotalTitle: {
    fontSize: 14,
    color: colors.light,
    fontWeight: 'bold',
  },

  textSubtotal: {
    fontSize: 24,
    color: colors.secundary,
    marginTop: 2,
    fontWeight: 'bold',
  },
});

export default styles;
