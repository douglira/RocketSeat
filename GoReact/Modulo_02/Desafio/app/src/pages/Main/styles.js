import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const SideBar = styled.div`
  width: 320px;
  height: 100%;
  padding: 30px;
  background: #fff;
  overflow: 3;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  form {
    display: flex;
    justify-content: center;

    input {
      flex: 1;
      height: 55px;
      padding: 0 20px;
      background: #eee;
      border: 0;
      border-radius: 3px;
      color: #444;
    }

    button {
      width: 80px;
      height: 55px;
      padding: 0 20px;
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
`;
