import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  form: {
    width: '100%',
    padding: metrics.basePadding,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerInput: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    padding: metrics.basePadding / 2,
  },

  label: {
    fontSize: 12,
    color: colors.light,
    fontWeight: 'bold',
    marginRight: metrics.baseMargin,
  },

  input: {
    flex: 1,
    height: 42,
    borderWidth: 0,
    paddingVertical: metrics.basePadding / 2,
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.white,
    color: colors.regular,
    borderRadius: metrics.baseRadius,
  },

  containerButtons: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.basePadding / 2,
  },

  button: {
    flex: 1,
    height: 38,
    borderRadius: metrics.baseRadius,
    paddingVertical: metrics.basePadding / 2,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonSuccess: {
    backgroundColor: colors.secundary,
    marginLeft: metrics.baseMargin,
  },

  buttonCancel: {
    backgroundColor: colors.regular,
  },

  textButton: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
