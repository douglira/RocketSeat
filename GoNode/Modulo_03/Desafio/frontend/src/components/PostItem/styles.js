import styled from 'styled-components';

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: 20px 0;
  border-radius: 10px;
  background: #e1e1e1;
  padding: 10px;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      width: 48px;
      height: 48px;
      border-radius: 48px;
    }

    p {
      font-size: 14px;
      color: #333;
      font-weight: 700;
      margin-left: 10px;
      display: flex;
      align-items: center;
    }
  }

  p {
    align-self: stretch;
    font-weight: 300;
    font-size: 14px;
    color: #333;
  }
`;
