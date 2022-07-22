import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Star = styled.button`
  padding: 0 1rem;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
`;

interface StarIconProps {
  colorProps?: boolean;
}

export const StarIcon = styled.span<StarIconProps>`
  cursor: pointer;
  font-size: 3.5rem;

  color: ${props => {
    return props.colorProps
      ? props.theme.colors["magenta"]
      : props.theme.colors["dark-low"];
  }};
`;
