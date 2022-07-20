import React from "react";
import { H1 } from "./styles";

interface IDisplayProps {
  children: React.ReactNode;
};

const Display: React.FC<IDisplayProps> = ({ children }) => {
  return <H1>{children}</H1>;
};

export default Display;
