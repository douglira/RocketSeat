import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 40px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 0.75px solid #bbb;

    span:first-child {
      flex: 0 1;
    }

    span {
      display: flex;
      flex: 1;
      font-size: 14px;
      margin-right: 10px;
    }
  }

  label {
    align-self: center;
    width: 100%;
    margin-top: 15px;
    font-size: 14px;

    input,
    select {
      align-self: center;
      width: 100%;
      border: 0.75px solid #8d70ff;
      font-size: 13px;
      padding: 10px;
      color: #333;
      height: 38px;
      background: #eee;
      border-radius: 3px;
    }
  }

  button {
    font-size: 14px;
    width: 100%;
    background: #15d8a5;
    color: #fff;
    font-weight: 600;
    margin-top: 20px;
    padding: 10px 15px;
    border: 0;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #0dbf91;
    }
  }

  section {
    display: flex;
    flex: 1;
    justify-content: center;
    align-self: stretch;
    margin-top: 15px;

    & div {
      border: 0;
      padding: 0;

      & div {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        border: 2px dashed #8d70ff !important;
        border-radius: 3px !important;
        height: 128px !important;
        cursor: pointer;

        p {
          font-size: 14px;
          color: #333;
          vertical-align: middle;
        }
      }
    }

    img {
      height: 128px;
      flex: 1;
      margin-left: 5px;
    }
  }
`;
