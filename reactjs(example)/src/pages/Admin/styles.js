import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 10px 0;
  width: 100%;
  border: 0;
  background: ${props => props.theme.main.white.normal};
  border-radius: 1px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.main.lighter.normal};

    i {
      color: ${props => props.theme.main.primary.normal};
    }
  }

  i {
    font-size: 32px;
    color: ${props => props.theme.main.dark.normal};
  }
`;

export const HeaderAdmin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start !important;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 0.625px solid;
  border-bottom-color: ${props => props.theme.main.dark.normal};

  & > p {
    font-size: 26px;
    margin-left: 15px;
    color: ${props => props.theme.main.dark.normal};
    font-weight: 700;
  }

  i {
    font-size: 32px;
    color: ${props => props.theme.main.dark.normal};
  }
`;

export const DrawerOptionsContainer = styled.div`
  width: 100%;

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;

    button {
      border: 0;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      /* align-items: center; */
      line-height: 24px;
      padding: 15px 5px;

      &:hover {
        color: ${props => props.theme.main.primary.normal};
        background: ${props => props.theme.main.white.darken};
      }

      i {
        font-size: 16px;
        margin-left: 10px;
      }

      a {
        width: 100%;
        text-decoration: inherit;
        font-size: 16px;
        margin-left: 10px;
        color: ${props => props.theme.main.dark.normal};
        font-weight: 500;
        text-align: left;
      }
    }
  }
`;
