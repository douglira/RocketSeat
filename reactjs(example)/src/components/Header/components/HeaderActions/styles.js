import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex: 1;
  align-self: stretch;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  & > * {
    margin-right: 0 !important;
    margin-left: 10px !important;
  }

  & > a {
    align-self: center;
    font-size: 14px !important;
    font-weight: 500 !important;
  }

  p {
    font-size: 14px;

    button {
      border: 0;
      background: inherit;

      i {
        font-weight: bold;
        margin-left: 5px !important;
        padding: 7px;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
          background: ${props => props.theme.main.light.lighten};
        }
      }
    }
  }
`;

export const MenuItemText = styled.span`
  font-size: 13.5px;
`;
