import styled, { css } from "styled-components";
import { StandardSizes } from "./standardSizes";
import { HeadingProps } from "./index";

type StyleProps = {
  size:
    | typeof StandardSizes.L
    | typeof StandardSizes.M
    | typeof StandardSizes.S
    | typeof StandardSizes.XS
    | typeof StandardSizes.SH;

  textColor:
    | "dark-low"
    | "dark-medium"
    | "dark-high"
    | "magenta"
    | "light-solid"
    | "light-high";
};

export const Heading = styled("h1").attrs<HeadingProps>(
  ({ size }: StyleProps) => ({
    as: `h${size.level}`,
  }),
)<StyleProps>`

  ${({ size, textColor }: StyleProps) => css`

    font-size: ${size.fontSize};
    line-height: ${size.lineHeight};
    letter-spacing: ${size.letterSpacing};
    color: ${props => props.theme.colors[`${textColor}`]};
    font-weight: 700;

    @media (max-width: 767px) {
      font-size: ${size.mobileFontSize};
      line-height: ${size.mobileLineHeight};
    }
  `};
`;
