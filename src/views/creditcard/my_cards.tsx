import React, { useEffect } from 'react';
import { Icons } from "../../theme/icons";
import { ButtonBar, Window, H4, P } from '../../components';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { useWallet } from '../../data';
import { Card } from './components/card';
import { useTheme } from '../../theme';
import { ScrollView } from 'react-native';
import { Routes } from '../../navigation';


export const MyCards: React.FC = () => {
    const theme = useTheme();
    const { wallet, loadCards } = useWallet();
    const navigation = useNavigation<any>();

    useEffect(() => {
        loadCards();
    }, [loadCards]);

    const goBack = () => {
        navigation.navigate(Routes.home);
    };

    const goAdd = () => {
        navigation.push(Routes.new);
    };

    //TODO: Create a better strategy for card color
    const chooseCarColor = (index: number) => {
        if (index % 2 === 0) {
            return { color: theme.colors.black, textColor: theme.colors.white, cardName: 'Black Card' };
        } else {
            return { color: theme.colors.greenLight, textColor: theme.colors.black, cardName: 'Green Card' };
        }
    }

    return (
        <Window
            toolBarColor={theme.colors.white}
            title="Wallet Test"
            titleColor={theme.colors.blueDark}
            leftButton={<ButtonBar icon={Icons.back} onPress={goBack} />}
            rightButton={<ButtonBar icon={Icons.plus} onPress={goAdd} />}>
            <TopContainer>
                <H4 color={theme.colors.blueLight}>Meus cartões</H4>
            </TopContainer>
            <WalletContainer>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 140 }}
                >
                    {wallet.cards?.map((card, index) => (
                        <CardItemContainer key={index}>
                            <Card {...chooseCarColor(index)} card={card} />
                        </CardItemContainer>
                    ))}
                </ScrollView>
                <P>usar user cartão</P>
            </WalletContainer>
        </Window>
    );
}

const CardContainer = styled.View`
    flex: 1;
    justify-content: center;
`;

const TopContainer = styled.View`
    background-color: ${props => props.theme.colors.white};
    height: 70px;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    align-items: center;
    justify-content: center;
`;

const WalletContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
`;

const CardItemContainer = styled.View`
  margin-bottom: -150px;
`;