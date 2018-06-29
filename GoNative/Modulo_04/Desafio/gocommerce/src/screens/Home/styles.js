import { StyleSheet, Platform } from 'react-native';
import { colors, metrics } from 'styles';

const toUppercase = Platform.OS === 'ios' ? { textTransform: 'uppercase' } : null;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  tabBarCategoryWrapper: {
    maxHeight: 44,
  },

  tabBarCategoryScroll: {
    height: 44,
    backgroundColor: colors.primary,
  },

  btnCategory: {
    flex: 1,
    marginHorizontal: metrics.baseMargin * 2,
    paddingVertical: metrics.basePadding,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnCategorySelected: {
    borderBottomWidth: 5,
    borderColor: colors.white,
  },

  textCategory: {
    color: colors.whiteTransparent,
    fontSize: 12,
    fontWeight: 'bold',
    ...toUppercase,
  },

  textCategorySelected: {
    color: colors.white,
    fontSize: 13,
  },

  containerProductList: {
    padding: metrics.basePadding,
    backgroundColor: colors.background,
  },

  columnContainerProduct: {
    marginHorizontal: metrics.baseMargin,
    justifyContent: 'space-between',
  },
});

export default styles;
