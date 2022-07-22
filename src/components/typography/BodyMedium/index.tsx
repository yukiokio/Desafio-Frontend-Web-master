import React from "react";
import * as S from "./styles";

interface BodyMediumProps {
  children: React.ReactNode;
  bold?: boolean;
  color?:
    | "dark-low"
    | "dark-medium"
    | "dark-high"
    | "magenta"
    | "light-solid"
    | "light-high";
}

const BodyMedium: React.FC<BodyMediumProps> = ({ children, bold = false, color }) => (
  <S.Paragraph color={color} bold={bold}>{children}</S.Paragraph>
);

export default BodyMedium;
