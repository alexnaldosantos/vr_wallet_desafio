import React, { useState } from 'react';
import { Icons } from "../../theme/icons";
import { ButtonBar, Button, Window, InputCreditCard, TextInputWithLabel, InputCreditCardExpirationDate, SizedBox } from '../../components';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { CreditCard, useWallet } from '../../data';


export const NewCreditCard: React.FC = () => {
    const { setAddingCard } = useWallet();
    const navigation = useNavigation();
    const [card, setCard] = useState<CreditCard | null>({
        id: '',
        name: '',
        exp: '',
        cvv: ''
    });

    const goBack = () => {
        navigation.goBack();
    };

    const handleButtonPress = () => {
        if (card != null) {
            setAddingCard(card);
            navigation.push('finish-credit-card');
        }
    };

    const handleCardNumberChange = (text: string) => {
        setCard(prevCard => {
            if (!prevCard) return null;
            return {
                ...prevCard,
                id: text
            };
        });
    }

    const handleCardExpNumberChange = (text: string) => {
        setCard(prevCard => {
            if (!prevCard) return null;
            return {
                ...prevCard,
                exp: text
            };
        });
    }

    const handleCardCvvNumberChange = (text: string) => {
        setCard(prevCard => {
            if (!prevCard) return null;
            return {
                ...prevCard,
                cvv: text
            };
        });
    }

    const handleCardNamerChange = (text: string) => {
        setCard(prevCard => {
            if (!prevCard) return null;
            return {
                ...prevCard,
                name: text
            };
        });
    }

    const isEnabled = () => {
        return card?.id?.length == 19 && card?.name?.length > 1 && card?.exp?.length == 5 && card?.cvv?.length > 1;
    }

    return (
        <Window title="cadastro" leftButton={<ButtonBar icon={Icons.back} onPress={goBack} />}>
            <CardContainer>
                <InputCreditCard value={card?.id} onChangeText={handleCardNumberChange} />
                <TextInputWithLabel value={card?.name} label='nome do titular do cartão' onChangeText={handleCardNamerChange} />
                <ExpCvvContainer>
                    <MiddleContainer>
                        <InputCreditCardExpirationDate value={card?.exp} onChangeText={handleCardExpNumberChange} />
                    </MiddleContainer>
                    <MiddleContainer>
                        <TextInputWithLabel value={card?.cvv} label='código de segurança' keyboardType='numeric' maxLength={4} onChangeText={handleCardCvvNumberChange} />
                    </MiddleContainer>
                </ExpCvvContainer>
                <SizedBox size='20px' />
                <Button enabled={isEnabled()} text={'avançar'} onPress={handleButtonPress}></Button>
            </CardContainer>
        </Window>
    );
}

const CardContainer = styled.View`
    flex: 1;
    justify-content: center;
`;

const ExpCvvContainer = styled.View`
    flex-direction: row;
`;

const MiddleContainer = styled.View`
    flex: 0.5;
`;