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
  }

  section {
    display: flex;
    flex: 1;
    flex-direction: column;

    &:hover {
      background: #f1f1f1;
    }

    i {
      color: #666;
      align-self: flex-end;
      font-size: 14px;
      padding: 5px;
      cursor: pointer;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      padding-bottom: 10px;

      &:not(:first-child) {
        border-bottom: 0.8px solid #ddd;
      }

      img {
        width: 32px;
        height: 32px;
        margin-right: 5px;
      }

      strong: {
        color: #333;
        font-size: 12px;
        margin-left: 5px;
      }

      span: {
        color: #666;
        font-size: 12px;
      }
    }
  }
`;
