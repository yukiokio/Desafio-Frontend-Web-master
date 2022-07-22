import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors["light-solid"]};
`;

export const Background = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 500px;
  box-shadow: ${props => props.theme.colors["dark-low"]} 0px 0px 1px;
  background-color: ${props => props.theme.colors["magenta"]};
  z-index: 0;
`;

export const Img = styled.img`
  width: 150px;
  margin: 30px 0;
`;
export const RatingContainer = styled.div`
  margin-top: 25px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border-radius: 10px;
  margin-top: 50px;
  padding: 15px 45px;
  width: 500px;
  height: 750px;

  box-shadow: ${props => props.theme.colors["dark-low"]} 0px 1px 10px;
  background-color: ${props => props.theme.colors["light-solid"]};
  z-index: 1;
`;
export const Form = styled.form``;
