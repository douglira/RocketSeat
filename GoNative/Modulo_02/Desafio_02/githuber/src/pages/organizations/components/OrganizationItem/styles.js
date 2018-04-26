import { StyleSheet } from 'react-native';
import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.card,
    flex: 1,
    marginTop: metrics.baseMargin,
    alignItems: 'center',
    maxWidth: (metrics.screenWidth - 40) / 2,
  },

  avatar: {
    width: 50,
    height: 50,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: metrics.baseMargin,
  },
});

export default styles;
