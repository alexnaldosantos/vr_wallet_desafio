/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import { P, View, Window, InputCreditCard, TextInputWithLabel, InputCreditCardExpirationDate } from "./src/components";
import { ThemeProvider } from 'styled-components/native';
import { WalletTheme, useTheme } from "./src/theme";
import { Icons } from "./src/theme/icons";

import { ButtonBar, Button } from './src/components/button';


function App(): JSX.Element {

  const handleButtonPress = () => {
    console.log('dt pressed!');
  };

  const [cardNumber, setCardNumber] = useState("");
  const handleCardNumberChange = (text: string) => {
    setCardNumber(text);
  }

  const [cardExpNumber, setCardExpNumber] = useState("");
  const handleCardExpNumberChange = (text: string) => {
    setCardExpNumber(text);
  }

  return (
    <ThemeProvider theme={WalletTheme}>
      <Window title="cadastro" leftButton={<ButtonBar icon={Icons.back} onPress={handleButtonPress} />} rightButton={<ButtonBar icon={Icons.plus} />}>
        <ViewExample />
        <Button enabled={cardNumber?.length == 19} text={'button'} onPress={handleButtonPress}></Button>
        <InputCreditCard value={cardNumber} onChangeText={handleCardNumberChange} />
        <TextInputWithLabel value='ola' label='número do titular do cartão' />
        <InputCreditCardExpirationDate value={cardExpNumber} onChangeText={handleCardExpNumberChange} />

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
