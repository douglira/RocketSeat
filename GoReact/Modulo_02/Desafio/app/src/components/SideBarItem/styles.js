import styled from 'styled-components';

export const Anchor = styled.a`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  cursor: pointer;
  border-radius: 3px;
  border: 0;
  background: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  img {
    width: 45px;
    height: 45px;
  }

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-self: stretch;
    margin-left: 10px;
    align-items: flex-start;

    span {
      font-size: 16px;
      font-weight: bold;
      color: #666;
    }

    small {
      font-size: 14px;
      font-weight: normal;
      color: #bbb;
    }
  }

  button {
    font-size: 25px;
    padding: 10px;
    color: #bbb;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;
