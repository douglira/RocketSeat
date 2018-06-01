import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding-top: 100px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%px;
    max-width: 350px;
    background: #f9f9f9;
    border-radius: 5px;
    padding: 30px;
    box-sizing: border-box;

    & > * {
      align-self: stretch;
    }

    input {
      padding: 20px;
      color: #333;
      margin-bottom: 15px;
      border-radius: 3px;
      border: 0.75px solid #999;
      background: #f9f9f9;
      font-size: 16px;
    }

    button {
      padding: 20px;
      color: #fff;
      border-radius: 3px;
      border: 0;
      background: #15d8a5;
      font-size: 16px;
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
  color: #8b2607;
  padding: 15px 0;
`;
