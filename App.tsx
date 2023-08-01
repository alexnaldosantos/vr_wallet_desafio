/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { P, View, Window, TextInput, TextInputWithLabel } from "./src/components";
import { ThemeProvider } from 'styled-components/native';
import { WalletTheme, useTheme } from "./src/theme";
import { Icons } from "./src/theme/icons";

import { ButtonBar, Button } from './src/components/button';
import { Image } from 'react-native/Libraries/Image/Image';


function App(): JSX.Element {

  const handleButtonPress = () => {
    console.log('dt pressed!');
  };

  return (
    <ThemeProvider theme={WalletTheme}>
      <Window title="cadastro" leftButton={<ButtonBar icon={Icons.back} onPress={handleButtonPress} />} rightButton={<ButtonBar icon={Icons.plus} />}>
        <ViewExample />
        <Button text={'button'} onPress={handleButtonPress}></Button>
        <TextInputWithLabel label='número do cartão de crédito' placeholder="digite sua senha" icon={Icons.card} />
        <TextInputWithLabel value='ola' label='número do titular do cartão' />

        {/* <View style={{
          backgroundColor: '#EEEEEE',
          width: 350,
          height: 300,
          opacity: 0.2,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          position: 'absolute',
        }}></View> */}
      </Window>
    </ThemeProvider>
  );
}

const ViewExample = () => {
  const theme = useTheme();

  return (<P>Ops 10 go chegadno....</P>)
}

export default App;
