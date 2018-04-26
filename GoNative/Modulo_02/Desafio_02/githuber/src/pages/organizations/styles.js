import { StyleSheet } from 'react-native';
import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.card,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
  },

  repoTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },

  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'center',
  },

  infoIcon: {
    color: colors.dark,
  },

  infoText: {
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2,
  },

  columnContainer: {
    marginHorizontal: metrics.baseMargin,
    justifyContent: 'space-between',
  },
});

export default styles;
