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
    align-self: stretch;
    flex-direction: column;
    min-height: 80px;

    &:hover {
      background: #f1f1f1;
    }

    &:not(:first-child) {
      border-bottom: 0.8px solid #ddd;
    }

    button {
      border: 0;
      padding: 5px;
      align-self: flex-end;
      cursor: pointer;
      background: transparent;

      i {
        color: #666;
        font-size: 14px;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      padding: 0 5px 10px 5px;

      a {
        color: inherit !important;
        text-decoration: initial;
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
