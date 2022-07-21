import PropTypes from "prop-types";
import styles from "./Layout.module.css";
import logo from "../../assets/images/serasa-logo-full.svg";

import Header from "./header/Header.js";
import Footer from "./footer/Footer.js";
import Content from "./content/Content.js";

import Display from "../../typography/components/Display/Display";
import HeadingL from "../../typography/components/HeadingL/HeadingL";
import HeadingM from "../../typography/components/HeadingM/HeadingM";
import HeadingS from "../../typography/components/HeadingS/HeadingS";
import HeadingXS from "../../typography/components/HeadingXS/HeadingXS";
import Subheading from "../../typography/components/Subheading/Subheading";
import BodyM from "../../typography/components/BodyM/BodyM";
import Card from "../components/card/Card";
import NPS from "../components/nps/NPS";

function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <Header />
      <Content>
        {children}
        <NPS></NPS>
      </Content>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
