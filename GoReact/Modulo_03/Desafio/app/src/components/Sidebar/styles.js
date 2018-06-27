import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  bottom: 20px;
  max-width: 320px;
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  z-index: 1;

  nav {
    display: flex;
    flex: 1;
    flex-direction: column !important;
    position: relative;
    height: 100%;
    overflow-y: auto;

    p {
      align-self: flex-start;
      font-size: 14px;
      color: #999;
    }

    li {
      display: flex;
      flex-direction: row !important;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-bottom: 0.7px solid #eee;
      padding: 15px 0;
      position: relative;

      img {
        width: 48px;
        height: 48px;
        border-radius: 48px;
      }

      section {
        display: flex;
        flex: 1;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: flex-start !important;
        align-self: stretch;
        height: 100%;
        margin-left: 10px;

        strong {
          font-size: 16px;
          color: #333;
          margin-bottom: 3px;
        }

        span {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: center !important;
  align-items: center;
`;

export const Button = styled.button`
  flex: 1;
  background: inherit;
  border: 0;
  font-size: 18px;
  padding: 10px;
  height: 100%;
  cursor: pointer;
  color: ${props => (props.danger ? '#D45454' : '#999')};

  &:hover {
    background: #f7f7f7;
  }
`;
