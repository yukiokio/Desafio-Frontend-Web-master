import React from "react";
import { StandardSizes } from "./standardSizes";
import * as S from "./styles";

export type HeadingProps = {
  children: React.ReactNode;
  level?: "L" | "M" | "S" | "XS";
};

const Heading: React.FC<HeadingProps> = ({ children, level = "L" }) => {
  return <S.Heading size={StandardSizes[`${level}`]}>{children}</S.Heading>;
};

export default Heading;
