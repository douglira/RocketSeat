import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    top: 200,
    width: '100%',
    position: 'absolute',
    zIndex: 5,
  },

  content: {
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 2,
    alignSelf: 'center',
  },

  error: {
    backgroundColor: colors.darkTransparent,
  },

  info: {
    backgroundColor: colors.dark,
  },

  text: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
