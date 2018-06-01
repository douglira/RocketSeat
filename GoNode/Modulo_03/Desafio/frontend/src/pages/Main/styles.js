import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 720px;
  background: #f1f1f1;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  border-bottom: 0.85px solid #ddd;
  height: auto;
  padding-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 128px;
      height: 128px;
      border-radius: 128px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }

    p {
      color: #222;
      font-size: 24px;
      margin-top: 15px;
      font-weight: 500;
    }
  }

  form {
    display: flex;
    margin-left: 20px;
    flex: 1;
    flex-direction: column;

    & > * {
      align-self: stretch;
      border-radius: 3px;
    }

    textarea {
      font-size: 14px;
      color: #444;
      background: #eee;
      border: 0;
      padding: 20px;
      box-sizing: border-box;
      height: 120px;
      resize: none;
    }

    button {
      font-size: 14px;
      background: #15d8a5;
      color: #fff;
      font-weight: 600;
      margin-top: 10px;
      padding: 15px;
      border: 0;
      cursor: pointer;
    }
  }
`;
