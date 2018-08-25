import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px 0;
  max-width: 50%;
  min-width: 360px;
  color: ${props => props.theme.main.dark.normal};

  p {
    font-size: 13.5px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  strong {
    color: ${props => props.theme.main.primary.darken} !important;
  }

  button[type='submit'] {
    border: 0;
    background: ${props => props.theme.main.secondary.normal};
    padding: 15px 25px;
    color: ${props => props.theme.main.white.normal};
    margin: 30px 0 20px 0;
    align-self: center;
    cursor: pointer;
    font-size: 15px;
    width: 100%;
    max-width: 65%;
    border-radius: 1px;
    font-weight: bold;

    &:hover {
      background: ${props => props.theme.main.secondary.lighten};
    }
  }
`;

export const MaterialUI = () => ({
  cssLabel: {
    '&$cssFocused': {
      color: colors.main.primary.normal,
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: colors.main.primary.normal,
    },
  },
  cssUnderlineError: {
    '&:after': {
      borderBottomColor: colors.main.danger,
    },
    '&:before': {
      borderBottomColor: colors.main.danger,
    },
  },
  formControl: {
    width: '75%',
    marginTop: '15px',
  },
  inputLabel: {
    fontSize: '15px',
  },
  inputText: {
    fontSize: '14px',
  },
});
