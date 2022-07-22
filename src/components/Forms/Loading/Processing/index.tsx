import React from "react";
import Heading from "../../../Typography/Heading";
import * as S from "./styles";

interface ProcessingProps {
  success?: boolean;
  stars?: any;
}

const Processing: React.FC<ProcessingProps> = ({ success = false }) => {
  return (
    <S.Overlay>
      <S.Content>
        {success ? (
          <Heading level="M" color="light-solid">
            Obrigado por avaliar nossos serviços!...
          </Heading>
        ) : (
          <Heading level="M" color="light-solid">
            Aguarde, estamos processando...
          </Heading>
        )}
      </S.Content>
    </S.Overlay>
  );
};

export default Processing;
