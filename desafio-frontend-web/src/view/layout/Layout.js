import PropTypes from 'prop-types';

import Header from "./header/Header.js";
import Footer from "./footer/Footer.js";
import Content from "./content/Content.js";

import Display from '../../typography/components/Display/Display';
import HeadingL from '../../typography/components/HeadingL/HeadingL';
import HeadingM from '../../typography/components/HeadingM/HeadingM';
import HeadingS from '../../typography/components/HeadingS/HeadingS';
import HeadingXS from '../../typography/components/HeadingXS/HeadingXS';
import Subheading from '../../typography/components/Subheading/Subheading';
import BodyM from '../../typography/components/BodyM/BodyM';

function Layout({children}) {
  return (
    <>
      <Header />
      <Content>
        {children}
        <Display color="accent">Display</Display>
        <HeadingL color="dark-low">HeadingL</HeadingL>
        <HeadingM color="light-solid">HeadingM</HeadingM>
        <HeadingS>HeadingS</HeadingS>
        <HeadingXS color="dark-high">HeadingXS</HeadingXS>
        <Subheading color="light-high">Subheading</Subheading>
        <BodyM color="dark-medium" bold>
          BodyM bold
        </BodyM>
        <BodyM color="accent">BodyM</BodyM>
      </Content>
      <Footer />
    </>
  );
}

Layout.propTypes = {
    children: PropTypes.element
}

export default Layout;