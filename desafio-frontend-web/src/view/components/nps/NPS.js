import Card from "../card/Card";
import styles from "./NPS.module.css";
import logo from "../../../assets/images/serasa-logo-full.svg";
import { ReactComponent as Star } from "../../../assets/images/star-icon.svg";
import HeadingXS from "../../../typography/components/HeadingXS/HeadingXS";
import Subheading from "../../../typography/components/Subheading/Subheading";
import BodyM from "../../../typography/components/BodyM/BodyM";

function NPS({ children }) {
  return (
    <Card>
      <img src={logo} className={styles.NPS_logo} />
      <Subheading>
        Conte-nos o quanto está satisfeito com nossos serviços:
      </Subheading>
      
      {/* Refatorar div abaixo para componente próprio e criar funcionalidades para Rating */}
      <HeadingXS>Marque de 1 a 5 estrelas</HeadingXS>
      <div className={styles.NPS_buttonGroup}>
        <button className={styles.NPS_button}>
          <Star className={styles.NPS_star}></Star>
        </button>
        <button className={styles.NPS_button}>
          <Star className={styles.NPS_star}></Star>
        </button>
        <button className={styles.NPS_button}>
          <Star className={styles.NPS_star}></Star>
        </button>
        <button className={styles.NPS_button}>
          <Star className={styles.NPS_star}></Star>
        </button>
        <button className={styles.NPS_button}>
          <Star className={styles.NPS_star}></Star>
        </button>
      </div>

      <div className={styles.NPS_input}>
        <label htmlFor="name">
          <HeadingXS>Nome</HeadingXS>
        </label>
        <input
          className={styles.NPS_inputName}
          type="text"
          name="name"
          maxLength="120"
        ></input>
      </div>

      <div className={styles.NPS_input}>
        <label htmlFor="comment">
          <HeadingXS>Comentário (opcional)</HeadingXS>
        </label>
        <textarea
          className={styles.NPS_inputComment}
          type="text"
          name="comment"
          maxLength="512"
        ></textarea>
      </div>

      <button className={styles.NPS_submitButton} type="submit">
        <BodyM color="light-solid" bold>Enviar avaliação</BodyM>
      </button>
    </Card>
  );
}

export default NPS;
