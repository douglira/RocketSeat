import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    paddingHorizontal: metrics.basePadding,
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: metrics.basePadding,
    borderBottomWidth: 1,
    borderColor: colors.light,
    marginBottom: metrics.baseMargin,
  },

  input: {
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding / 5,
    flexGrow: 10,
    fontSize: 12,
  },

  iconContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  loading: {
    margin: metrics.baseMargin,
  },

  emptyText: {
    color: colors.regular,
  },
});

export default styles;
