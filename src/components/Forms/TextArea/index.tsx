import React, {
  TextareaHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import Heading from "../../Typography/Heading";
import * as S from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: React.ReactNode;
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  { children, ...rest },
  ref,
) => (
  <S.Container>
    <Heading level="XS">{children}</Heading>
    <S.TextArea ref={ref} {...rest}/>
  </S.Container>
);

export default forwardRef(TextArea);
