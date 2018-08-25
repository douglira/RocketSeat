import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  background: inherit;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  min-height: fit-content;
  background: ${props => props.theme.main.white.normal};
  margin-top: 15px;
  padding: 40px 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  h1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 20px;
    font-weight: 400;
    color: ${props => props.theme.main.darker.normal};
    text-transform: uppercase;
    margin: 10px 0;
    padding: 0 15px;
    position: relative;
    width: 100%;
    max-width: 80%;

    &::after {
      display: block;
      content: '';
      width: 35%;
      background: ${props => props.theme.main.light.normal};
      height: 0.825px;
      position: absolute;
      bottom: 50%;
      left: 0;
    }

    &::before {
      display: block;
      content: '';
      width: 35%;
      background: ${props => props.theme.main.light.normal};
      height: 0.825px;
      position: absolute;
      bottom: 50%;
      right: 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 80%;

    a {
      text-decoration: inherit;
      font-size: 13px;
      color: ${props => props.theme.main.regular.lighten};
      align-self: flex-end;
      margin-top: 5px;

      &:hover {
        color: ${props => props.theme.main.regular.normal};
        font-weight: 500;
      }
    }

    button {
      margin-top: 30px;
      padding: 10px;
      align-self: stretch;
      color: ${props => props.theme.main.white.normal};
      border: 0;
      background: ${props => props.theme.main.secondary.normal};
      font-size: 14px;
      font-weight: 700;
      border-radius: 1px;
      cursor: pointer;

      &:hover {
        background: ${props => props.theme.main.secondary.lighten};
      }
    }
  }
`;

export const RegisterOption = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 80%;

  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 14px;
    color: ${props => props.theme.main.regular.normal};
    margin: 30px 0;
    position: relative;
    width: 100%;

    &::after {
      display: block;
      content: '';
      width: 40%;
      background: ${props => props.theme.main.light.normal};
      height: 0.825px;
      position: absolute;
      bottom: 50%;
      left: 0;
    }

    &::before {
      display: block;
      content: '';
      width: 40%;
      background: ${props => props.theme.main.light.normal};
      height: 0.825px;
      position: absolute;
      bottom: 50%;
      right: 0;
    }
  }

  a {
    text-decoration: inherit;
    font-size: 14.5px;
    color: ${props => props.theme.main.secondary.normal};
    font-weight: 500;

    &:hover {
      color: ${props => props.theme.main.primary.normal};
      font-weight: 700;
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
    width: '100%',
    marginTop: '15px',
  },
  inputLabel: {
    fontSize: '15px',
  },
  inputText: {
    fontSize: '14px',
  },
});
