import React from "react";
import { StandardSizes } from "./standardSizes";
import * as S from "./styles";

export type HeadingProps = {
  children: React.ReactNode;
  level?: "L" | "M" | "S" | "XS" | "SH";
  color?:
    | "dark-low"
    | "dark-medium"
    | "dark-high"
    | "magenta"
    | "light-solid"
    | "light-high";
};

const Heading: React.FC<HeadingProps> = ({
  children,
  level = "L",
  color = "dark-high",
  ...rest
}) => {

  return (
    <S.Heading
      size={StandardSizes[`${level}`]}
      textColor={color}
      {...rest}
    >
      {children}
    </S.Heading>
  );
};

export default Heading;
