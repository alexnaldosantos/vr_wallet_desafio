/**
 * Desafio BR Benefícios feito por Alexnaldo Santos
 * https://github.com/alexnaldosantos/vr_wallet_desafio
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components/native';
import { WalletTheme } from "./src/theme";
import { StackNavigator } from "./src/navigation";
import { WalletProvider } from './src/data/context';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <ThemeProvider theme={WalletTheme}>
        <WalletProvider>
          <StackNavigator />
        </WalletProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
