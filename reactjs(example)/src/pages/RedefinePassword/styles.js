import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  background: inherit;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 960px;
  min-height: fit-content;
  background: ${props => props.theme.main.white.normal};

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${props => props.theme.main.dark.lighten};

    i {
      margin-right: 10px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${props => props.theme.main.dark.normal};
    position: relative;

    &::after {
      display: block;
      content: '';
      width: 30%;
      background: ${props => props.theme.main.light.normal};
      height: 0.825px;
      position: absolute;
      bottom: 50%;
      left: 0;
    }

    &::before {
      display: block;
      content: '';
      width: 30%;
      background: ${props => props.theme.main.light.normal};
      height: 0.825px;
      position: absolute;
      bottom: 50%;
      right: 0;
    }
  }
`;
