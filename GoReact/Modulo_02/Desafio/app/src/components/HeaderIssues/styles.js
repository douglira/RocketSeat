import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fff;
  height: 100px;
  padding: 30px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 3;

  div {
    display: flex;
    flex-direction: row;

    img {
      width: 64px;
      height: 64px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 15px;

      span {
        font-size: 18px;
        font-weight: bold;
        color: #333;
      }

      small {
        font-size: 16px;
        font-weight: normal;
        color: #bbb;
      }
    }
  }

  select {
    background: transparent;
    border: 1px solid #ddd;
    padding: 0 20px;
    height: 42px;
    border-radius: 3px;
    color: #666;
    width: 250px;
    box-sizing: border-box;
    cursor: pointer;
  }
`;
