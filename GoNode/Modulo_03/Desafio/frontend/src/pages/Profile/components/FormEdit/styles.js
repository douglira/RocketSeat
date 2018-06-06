import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;

  input {
    align-self: center;
    width: 60%;
    border: 0.75px solid #8d70ff;
    font-size: 16px;
    padding: 10px;
    color: #333;
    height: 38px;
    background: #eee;
    border-radius: 3px;
  }
`;
