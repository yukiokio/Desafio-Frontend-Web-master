import React, {
  ForwardRefRenderFunction,
  forwardRef,
  InputHTMLAttributes,
} from "react";
import { Heading } from "../../Typography";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { children, ...rest },
  ref,
) => (
  <S.Container>
    <Heading level="XS">{children}</Heading>
    <S.Input ref={ref} {...rest}>
    </S.Input>
  </S.Container>
);

export default forwardRef(Input);
