import React, { useState } from 'react';
import { Icons } from "../../theme/icons";
import { ButtonBar, Button, Window, SizedBox, H4, HorizontalCenter, H1 } from '../../components';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { CreditCard, useWallet } from '../../data';
import { Card } from './components/card';
import { useTheme } from '../../theme';
import { Routes } from '../../navigation';


export const FinishCreditCard: React.FC = () => {
    const theme = useTheme();
    const { addCard, wallet } = useWallet();
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const handleButtonPress = () => {
        if (wallet.adding != null) {
            addCard(wallet.adding)
            navigation.navigate(Routes.cards);
        }
    };

    return (
        <Window title="cadastro" leftButton={<ButtonBar icon={Icons.back} onPress={goBack} />}>
            <CardContainer>
                <HorizontalCenter>
                    <H1>Wallet Test</H1>
                    <H4>cartão cadastrado com sucesso</H4>
                    <Card color={theme.colors.black} card={wallet.adding} />
                    <Button maxWidth='300px' text={'avançar'} onPress={handleButtonPress} />
                </HorizontalCenter>
            </CardContainer>
        </Window>
    );
}

const CardContainer = styled.View`
    flex: 1;
    justify-content: center;
`;