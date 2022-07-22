import React from "react";
import * as S from "./styles";

interface DisplayProps {
  children: React.ReactNode;
}

const Display: React.FC<DisplayProps> = ({ children }) => (
  <S.H1>{children}</S.H1>
);

export default Display;
