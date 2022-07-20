import './App.css';
import Display from './typography/components/Display/Display';
import HeadingL from './typography/components/HeadingL/HeadingL';
import HeadingM from './typography/components/HeadingM/HeadingM';
import HeadingS from './typography/components/HeadingS/HeadingS';
import HeadingXS from './typography/components/HeadingXS/HeadingXS';
import Subheading from './typography/components/Subheading/Subheading';
import BodyM from './typography/components/BodyM/BodyM';

function App() {
  return (
    <div className="App">
      <Display color="accent">Display</Display>
      <HeadingL color="dark-low">HeadingL</HeadingL>
      <HeadingM color="light-solid">HeadingM</HeadingM>
      <HeadingS>HeadingS</HeadingS>
      <HeadingXS color="dark-high">HeadingXS</HeadingXS>
      <Subheading color="light-high">Subheading</Subheading>
      <BodyM color="dark-medium" bold>BodyM bold</BodyM>
      <BodyM color="accent" >BodyM</BodyM>
    </div>
  );
}

export default App;
