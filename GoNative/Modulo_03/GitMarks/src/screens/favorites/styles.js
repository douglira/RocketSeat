import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  empty: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: 14,
    marginTop: metrics.baseMargin,
  },
});

export default styles;
