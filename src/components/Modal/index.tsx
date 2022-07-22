import React, { SetStateAction } from "react";
import * as S from "./styles";
import { BodyMedium, Heading } from "../Typography";
import { Button } from "../Forms";

interface ModalProps {
  setModal: React.Dispatch<SetStateAction<boolean>>;
  stars: any;
}

const Modal: React.FC<ModalProps> = ({ setModal, stars }) => {
  
  return (
    <S.Overlay>
      <S.Content>
        <Heading level="S" color="light-solid">
          Avaliações:{" "}
        </Heading>
        <S.Votes>
          <BodyMedium>1 estrela(s) {stars.one} </BodyMedium>
          <BodyMedium>2 estrela(s): {stars.two} </BodyMedium>
          <BodyMedium>3 estrela(s): {stars.three} </BodyMedium>
          <BodyMedium>4 estrela(s): {stars.four} </BodyMedium>
          <BodyMedium>5 estrela(s): {stars.five} </BodyMedium>
          <Button
            onClick={() => setModal(false)}
            title="Botão fechar o Modal."
          >
            Fechar
          </Button>
        </S.Votes>
      </S.Content>
    </S.Overlay>
  );
};

export default Modal;
