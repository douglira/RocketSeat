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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

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
    padding-bottom: 5px;
  }
`;

export const PostInteractions = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 5px 0;
  border-top: 0.75px solid #bbb;

  button {
    border: 0;
    display: flex;
    align-items: flex-start;
    color: #666;
    font-weight: 300;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
    margin-top: 5px;
    background-color: inherit;

    span {
      margin-right: 5px;
      align-self: flex-end;
    }

    i {
      font-size: 20px;
      color: inherit;
    }
  }
`;
