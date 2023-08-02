import React from 'react';
import { Window, Button, H1, HorizontalCenter, SizedBox } from '../../components';
import { useTheme } from "../../theme";
import styled from 'styled-components/native';
import { Routes } from '../../navigation';
import { useNavigation } from '@react-navigation/native';

export const Home: React.FC = () => {
    const theme = useTheme();
    const navigation = useNavigation<any>();

    const newCreditCard = () => {
        navigation.push(Routes.new);
    }

    const myCards = () => {
        navigation.push(Routes.cards);
    }

    return (
        <Window>
            <HomeContainer>
                <HorizontalCenter>
                    <H1>Wallet Test</H1>
                </HorizontalCenter>
                <SizedBox size='10px' />
                <Button text={'meus cartões'} onPress={myCards} />
                <SizedBox size='20px' />
                <Button text={'cadastrar cartão'} onPress={newCreditCard} color={theme.colors.greenLight} textColor={theme.colors.black} />
            </HomeContainer>
        </Window>
    );
}

const HomeContainer = styled.View`
    flex: 1;
    justify-content: center;
    padding: 16px;
`;