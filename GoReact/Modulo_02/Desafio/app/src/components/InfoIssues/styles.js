import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 1;
`;

export const Issues = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
  padding: 10px;

  div {
    display: flex;
    flex-direction: row;
    width: 28%;
    margin: 20px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 3px;
    align-items: center;

    img {
      width: 64px;
      height: 64px;
      border-radius: 64px;
    }

    section {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 20px;

      span {
        font-size: 16px;
        color: #333;
        font-weight: bold;
        margin-bottom: 5px;
      }

      small {
        font-size: 14px;
        color: #bbb;
        margin-bottom: 5px;
      }

      a {
        padding: 10px;
        border-radius: 3px;
        background: #b286d1;
        color: #fff;
        width: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        text-decoration: none;
        font-size: 14px;
        margin-top: 5px;

        strong {
          color: #fff;
          text-transform: uppercase;
          margin-left: 10px;
          font-size: 14px;
        }
      }
    }
  }
`;
