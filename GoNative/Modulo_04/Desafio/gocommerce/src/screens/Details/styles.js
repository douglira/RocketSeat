import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: metrics.basePadding,
    backgroundColor: colors.background,
  },

  content: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: metrics.basePadding / 2,
    backgroundColor: colors.white,
  },

  image: {
    height: 285,
    alignSelf: 'stretch',
  },

  containerInfo: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.baseMargin / 2,
  },

  info: {
    flex: 1,
    justifyContent: 'center',
  },

  textName: {
    color: colors.darker,
    fontSize: 18,
    fontWeight: 'bold',
  },

  textBrand: {
    color: colors.light,
    fontSize: 12,
  },

  textPrice: {
    color: colors.secundary,
    fontSize: 24,
    fontWeight: 'bold',
  },

  containerButton: {
    alignSelf: 'stretch',
    height: 45,
    marginTop: metrics.baseMargin,
  },

  contentButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
  },

  textAddToCart: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
