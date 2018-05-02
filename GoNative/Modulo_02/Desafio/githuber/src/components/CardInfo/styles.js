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
    borderRadius: 50,
  },

  infoContainer: {
    flexDirection: 'row',
  },

  description: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: metrics.baseMargin,
  },

  infoTitle: {
    fontSize: 16,
    color: colors.darker,
    fontWeight: 'bold',
  },

  infoSubtitle: {
    fontSize: 12,
    color: colors.regular,
  },

  iconContainer: {
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});

export default styles;
