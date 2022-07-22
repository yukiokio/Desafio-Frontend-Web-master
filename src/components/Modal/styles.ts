import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors["dark-high"]};
`;

export const Votes = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
