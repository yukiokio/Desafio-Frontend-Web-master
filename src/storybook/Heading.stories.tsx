import { Heading } from "../components/Typography";

export default {
  title: "Heading",
  component: Heading,
};

export const Large = () => <Heading>Heading L </Heading>;
export const Medium = () => <Heading level="M">Heading M </Heading>;
export const Small = () => <Heading level="S">Heading S </Heading>;
export const ExtraSmall = () => <Heading level="XS">Heading XS </Heading>;
export const Subheading = () => <Heading level="SH">Heading SH </Heading>;
