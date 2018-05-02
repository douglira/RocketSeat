import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.basePadding,
  },

  loading: {
    margin: metrics.baseMargin,
  },

  emptyText: {
    color: colors.regular,
  },
});

export default styles;
