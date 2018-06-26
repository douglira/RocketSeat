import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  float: right;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);

  div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: transparent;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      max-width: 300px;
      width: 100%;
      border-radius: 5px;
      background: #fff;
      padding: 20px;

      h1 {
        font-size: 16px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
      }

      input {
        border: 0.6px solid #bbb;
        padding: 10px;
        align-self: stretch;
        margin: 10px 0;
        border-radius: 5px;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex: 1;
  align-self: stretch;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: 0 !important;
`;

export const Button = styled.button`
  background: ${(props) => {
    const { theme } = props;

    switch (theme) {
      case 'success':
        return '#9DCA83';
      case 'danger':
        return '#E37A7A';
      default:
        return '#bbb';
    }
  }};
  flex: 1;
  max-width: 48%;
  border: 0;
  padding: 10px 20px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
