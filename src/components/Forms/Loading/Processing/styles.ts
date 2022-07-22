import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors["dark-medium"]};
`;

export const Votes = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
