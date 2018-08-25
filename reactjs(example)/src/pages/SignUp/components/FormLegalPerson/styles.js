import styled from 'styled-components';
import { colors } from '~/styles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px 0;
  max-width: 50%;
  min-width: 360px;

  h2 {
    font-size: 20px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.main.dark.normal};
    margin-top: 30px;
    padding-bottom: 3px;
    width: 100%;
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

  span {
    font-size: 14px;
    color: ${props => props.theme.main.dark.normal};
    align-self: center;

    a {
      text-decoration: inherit;
      color: ${props => props.theme.main.dark.normal};
      font-size: 14px;
      font-weight: 600;

      &:hover {
        color: ${props => props.theme.main.primary.normal};
      }
    }
  }
`;

export const ContainerCnpj = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: flex-start;
  align-items: flex-end;

  a {
    text-decoration: inherit;
    color: ${props => props.theme.main.dark.normal};
    font-size: 14px;
    margin-left: 20px;

    &:hover {
      color: ${props => props.theme.main.primary.normal};
      font-weight: 500;
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

  formControlEmail: {
    width: '80%',
    marginTop: '10px',
  },

  formControlPass: {
    width: '65%',
    marginTop: '10px',
  },

  formControlName: {
    width: '90%',
    marginTop: '10px',
  },

  formControlCnpj: {
    width: '45%',
    marginTop: '10px',
  },

  formControlNumber: {
    width: '35%',
    marginTop: '10px',
  },

  formControlPhone: {
    width: '38%',
    marginTop: '10px',
  },

  inputLabel: {
    fontSize: '14px',
    color: colors.main.dark.normal,
  },
  inputText: {
    fontSize: '14px',
  },
});
