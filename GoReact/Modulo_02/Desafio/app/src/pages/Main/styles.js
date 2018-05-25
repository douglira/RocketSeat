import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const SideBar = styled.div`
  width: 320px;
  padding: 30px;
  align-self: stretch;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  z-index: 4;

  form {
    display: flex;
    justify-content: center;

    input {
      flex: 1;
      height: 55px;
      background: #eee;
      border: 0;
      border-radius: 3px;
      color: #444;
      box-sizing: border-box;
      padding: 0 10px;
    }

    button {
      width: 60px;
      height: 55px;
      margin-left: 10px;
      background: #59ea9a;
      color: #fff;
      border: 0;
      font-size: 25px;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        background: #47cc82;
      }
    }
  }

  section {
    height: 100%;
    margin-top: 30px;
    padding: 30px 0;
    border-top: 1px solid #eee;
    overflow-y: auto;
  }
`;

export const IssuesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Loading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  p {
    width: 64px;
    height: 64px;
    background: transparent;
    color: #59ea9a;
    font-size: 32px;
  }
`;

export const EmptyIssuesText = styled.p`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #999;
  margin: 20px;
`;
