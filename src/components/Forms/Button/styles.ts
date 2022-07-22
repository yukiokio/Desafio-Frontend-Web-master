import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 50px;

  border: none;
  font-size: 1rem;
  color: ${props => props.theme.colors["light-solid"]};
  background-color: ${props => props.theme.colors["magenta"]};

  border-radius: 5px;
`;