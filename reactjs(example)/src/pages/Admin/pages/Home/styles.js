import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const MaterialUI = () => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing.unit * 3,
  },
  title: {
    alignSelf: 'flex-start',
    padding: '7px 0',
    borderBottom: `0.625px solid ${colors.main.light.normal}`,
    width: '100%',
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});
