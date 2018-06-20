import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 400px;
  overflow: auto;

  p {
    font-size: 14px;
    font-weight: 500;
    color: #666;
    margin-bottom: 0 !important;
  }

  section {
    display: flex;
    flex: 1;
    align-self: stretch;
    flex-direction: column;
    min-height: 70px;

    &:not(:first-child) {
      border-bottom: 0.8px solid #ddd;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 5px 10px 5px;

      img {
        width: 32px;
        height: 32px;
        margin-right: 5px;
      }

      strong: {
        color: #333;
        font-size: 10px;
        margin-left: 5px;
      }

      span: {
        color: #666;
        font-size: 9px;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 !important;

  button {
    border: 0;
    background: inherit;
    padding: 5px;
    box-sizing: border-box;
    margin-left: 10px;

    i {
      cursor: pointer;
    }
  }
`;
