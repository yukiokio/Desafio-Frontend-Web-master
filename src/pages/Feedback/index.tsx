import React, { useRef, useState } from "react";
import { Heading } from "../../components/Typography";
import {
  Form,
  StarRating,
  Input,
  Button,
  TextArea,
} from "../../components/Forms";
import { Processing, FakeLoading } from "../../components/Forms/Loading";
import api, {getRatings} from "../../services/api";
import * as S from "./styles";
import SerasaLogoFull from "../../assets/serasa-logo-full.svg";
import Modal from "../../components/Modal";

const Feedback: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const [starSelected, setStarSelected] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [starsOnDB, setStarsOnDB] = useState({});
  const [modal, setModal] = useState(false);
  const [allowOpenModal, setAllowOpenModal] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!starSelected) {
      alert("Marque ao menos uma estrela.");
      return null;
    }
    setLoading(true);

    const data = {
      name: nameInputRef.current?.value,
      comment: commentInputRef.current?.value,
      rating: starSelected,
    };

    await api.post("/feedback", data).then(() => {
      FakeLoading({ setLoading, setSuccess }, 1500, 4000);
    })
      .finally(() => {
        getRatings({setStarsOnDB});
        setAllowOpenModal(true);
      })
  };

  return (
    <S.Container>
      <S.Background title="Background da página em na cor magento." />
      <S.Content title="Modal onde há um formulário para avaliar o serviço.">
        {modal && <Modal setModal={setModal} stars={starsOnDB} />}
        {success && <Processing success={true} />}
        {loading && <Processing />}
        <S.Img src={SerasaLogoFull} />
        <Heading level="S">
          Conte-nos o quanto você está satisfeito com nossos serviços
        </Heading>
        <S.RatingContainer>
          <Heading level="SH">Marque de 1 à 5 estrelas:</Heading>
          <StarRating
            setStarSelected={setStarSelected}
            starSelected={starSelected}
          ></StarRating>
        </S.RatingContainer>

        <Form
          onSubmit={handleSubmit}
          title="Furmulário com o logotipo da Serasa, dois campos de texto e botões, onde você preenche os dados para avaliar os serviços."
        >
          <Input
            required
            ref={nameInputRef}
            type="text"
            alt="input de texto"
            title="Caixa de texto para inserir seu nome."
            name="Name"
          >
            Digite seu nome*
          </Input>
          <TextArea
            ref={commentInputRef}
            title="Caixa de texto para inserir seu comentário sobre a avaliação."
            name="Comment"
          >
            Comentários (opcional)
          </TextArea>
          <Button
            type="submit"
            tabIndex={0}
            title="Botão para enviar o formulário preenchido."
          >
            Enviar avaliação
          </Button>
        </Form>
        {allowOpenModal && (
          <Button
            onClick={() => setModal(true)}
            title="Botão para exibir Modal com as informações das avaliações realizadas."
          >
            Ver votações
          </Button>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Feedback;
