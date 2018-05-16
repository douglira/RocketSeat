import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  headerRight: {
    marginRight: metrics.baseMargin * 2,
  },

  loading: {
    marginTop: metrics.basePadding,
  },
});

export default styles;
