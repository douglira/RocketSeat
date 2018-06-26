import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  max-width: 320px;
  width: 100%;
  height: ${props => `${props.height}px`};
  padding: 20px;
  margin: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 2;

  p {
    font-size: 14px;
    color: #999;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 0.7px solid #eee;
  padding: 15px 0;

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
