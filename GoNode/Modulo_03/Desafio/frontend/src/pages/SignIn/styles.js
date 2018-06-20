import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 1;
  padding-top: 100px;

  img {
    height: 230px;
    border-radius: 5px 0 0 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%px;
    max-width: 350px;
    height: 230px;
    background: #fff;
    border-radius: 0 5px 5px 0;
    padding: 30px;
    box-sizing: border-box;

    & > * {
      align-self: stretch;
    }


    input {
      padding: 10px 20px;
      color: #333;
      margin-bottom: 15px;
      border-radius: 3px;
      border: 0.75px solid #999;
      background: #f9f9f9;
      font-size: 16px;
    }

    button {
      padding: 10px 20px;
      color: #fff;
      border-radius: 3px;
      border: 0;
      background: #15d8a5;
      font-size: 16px;
      font-weight: bold
      cursor: pointer;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 350px;
  font-size: 48px;
  word-spacing: 2px;
  color: #4124b1;
  padding: 15px 0;
`;
