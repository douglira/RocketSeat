import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  avatar: {
    width: 32,
    height: 32,
    borderRadius: metrics.baseRadius * 3,
    borderWidth: 5,
    borderColor: colors.white,
  },

  calloutContainer: {
    width: metrics.screenWidth / 2,
    backgroundColor: colors.white,
    padding: metrics.basePadding / 2,
  },

  calloutTitle: {
    fontSize: 14,
    color: colors.dark,
    marginBottom: metrics.baseMargin / 2,
  },

  calloutSubtitle: {
    fontSize: 12,
    color: colors.regular,
  },
});

export default styles;
