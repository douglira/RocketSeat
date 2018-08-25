import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  width: 100%;
  background: ${props => props.theme.main.lighter.normal};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 15px;
  padding: 10px 0 0 0;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 960px;
  height: 45px;
  margin-top: 15px;

  a {
    text-decoration: inherit;
    font-size: 20px;
    color: ${props => props.theme.main.darker.normal};
    font-weight: 400;
    text-align: center;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-right: 50px;
  }

  form {
    flex: 1;
    align-self: center;
    height: 38px;
    display: flex;
    flex-direction: row;
    background: inherit;
    max-width: 50%;
    border-radius: 2px;

    & > input:focus {
      border: 0.625px solid ${props => props.theme.main.primary.normal};
    }

    input {
      flex: 1;
      align-self: stretch;
      border: 0;
      border-radius: 1.25px;
      padding: 10px;
      box-sizing: border-box;
      font-size: 14px;
      color: ${props => props.theme.main.regular.normal};
      border-radius: 2px 0 0 2px;
      background: ${props => props.theme.main.white.normal};

      &::placeholder {
        color: ${props => props.theme.main.regular.normal};
      }
    }

    button {
      padding: 5px 15px;
      align-self: stretch;
      font-size: 14px;
      background: ${props => props.theme.main.primary.normal};
      border: 0;
      color: ${props => props.theme.main.white.normal};
      cursor: pointer;
      border-radius: 0 2px 2px 0;
      font-weight: 700;

      &:hover {
        background: ${props => props.theme.main.primary.lighten};
      }
    }
  }
`;

export const NavBar = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${props => props.theme.main.primary.normal};

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 960px;
    height: 35px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: stretch;
      text-decoration: inherit;
      border-radius: 2px;
      flex: 1;
      font-size: 16px;
      color: ${props => props.theme.main.darker.normal};
      font-weight: 600;
      text-align: center;

      &:hover {
        background: ${props => props.theme.main.primary.lighten};
      }

      &:first-child {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
    }

    section {
      display: flex;
      flex-direction: row;

      button {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        border: 0;
        background: ${props => props.theme.main.lighter.normal};
        padding: 7px 15px;
        box-sizing: border-box;
        margin-right: 0 !important;
        margin-left: 20px !important;
        cursor: pointer;

        &:last-child {
          margin-right: 20px !important;
        }

        &:hover {
          background: ${props => props.theme.main.light.lighten};
        }

        img {
          align-self: flex-end;
          box-sizing: border-box;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;
