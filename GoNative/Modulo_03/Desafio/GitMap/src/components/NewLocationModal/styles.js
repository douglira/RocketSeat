import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding / 2,
  },

  errorContainer: {
    padding: metrics.basePadding / 2,
    backgroundColor: colors.danger,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    position: 'absolute',
  },

  errorText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  boxContainer: {
    width: '100%',
    marginHorizontal: metrics.baseMargin,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
  },

  title: {
    fontSize: 18,
    color: colors.darker,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  loading: {
    color: colors.darker,
  },

  input: {
    marginTop: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    height: 42,
    borderColor: colors.light,
    alignSelf: 'stretch',
    paddingHorizontal: metrics.basePadding / 2,
    paddingVertical: 0,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
    height: 42,
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
  },

  buttonCancel: {
    backgroundColor: colors.none,
    marginRight: 7.5,
  },

  buttonSave: {
    backgroundColor: colors.success,
    marginLeft: 7.5,
  },

  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
