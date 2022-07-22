import React, { FormHTMLAttributes } from "react";
import * as S from "./styles";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children, ...rest }) => (
  <S.Form {...rest}>{children}</S.Form>
);

export default Form;
