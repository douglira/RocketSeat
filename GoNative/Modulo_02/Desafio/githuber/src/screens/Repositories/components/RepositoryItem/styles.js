import { StyleSheet } from 'react-native';
import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...general.card,
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },

  avatar: {
    ...general.avatarImage,
  },

  infoContainer: {
    flexDirection: 'row',
  },

  description: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: metrics.baseMargin,
  },

  infoRepo: {
    fontSize: 16,
    color: colors.darker,
    fontWeight: 'bold',
  },

  infoOrg: {
    fontSize: 12,
    color: colors.regular,
  },

  iconContainer: {
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});

export default styles;
