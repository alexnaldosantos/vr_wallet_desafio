import React from 'react';
import { Window, Button, H1, HorizontalCenter, SizedBox } from '../../components';
import { useTheme } from "../../theme";
import styled from 'styled-components/native';

export const Home: React.FC = ({ navigation }) => {
    const theme = useTheme();

    const newCreditCard = () => {
        navigation.push('new-credit-card');
    }

    const myCards = () => {
    }

    return (
        <Window>
            <HomeContainer>
                <HorizontalCenter>
                    <H1>Wallet Test</H1>
                </HorizontalCenter>
                <SizedBox size='10' />
                <Button text={'meus cartões'} onPress={myCards} />
                <SizedBox size='20' />
                <Button text={'cadastrar cartão'} onPress={newCreditCard} color={theme.colors.greenLight} textColor={theme.colors.black} />
            </HomeContainer>
        </Window>
    );
}

const HomeContainer = styled.View`
flex: 1;
justify-content: center;
`;