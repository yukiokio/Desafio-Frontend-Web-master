import styled, { css } from "styled-components";
import { StandardSizes } from "./standardSizes";
import { HeadingProps } from "./index";

type SizeProps = {
  size:
    | typeof StandardSizes.L
    | typeof StandardSizes.M
    | typeof StandardSizes.S
    | typeof StandardSizes.XS;
};

export const Heading = styled("h1").attrs<HeadingProps>(({ size }: SizeProps) => ({
  as: `h${size.level}`,
}))<SizeProps>`

  ${({ size }: SizeProps) => css`
    font-size: ${size.fontSize};
    line-height: ${size.lineHeight};
    letter-spacing: ${size.letterSpacing};
    font-weight: 700;

    @media (max-width: 767px) {
      font-size: ${size.mobileFontSize};
      line-height: ${size.mobileLineHeight};
    }
  `};
`;
