import React from 'react';
import { CreditCard } from '../../../data';
import { Colors } from '../../../theme/colors';
import { ViewStyled } from '../../../components/view/styles';
import styled from 'styled-components/native';
import { H3, H5, HorizontalCenter, P, SMALL, SizedBox } from '../../../components';
import { CardNumberObfuscator } from "./card_number_obfucator";
import { useTheme } from '../../../theme';


interface CardProps {
    color?: keyof Colors | string;
    card?: CreditCard;
}

export const Card: React.FC<CardProps> = ({ color, card }) => {
    const theme = useTheme();

    //TODO: card color at CreditCard object :-)
    const getCardName = () => {
        return color == theme.colors.black ? 'Black Card' : 'Green Card';
    }

    return (
        <HorizontalCenter>
            <CardStyled color={color}>
                <H5>{getCardName()}</H5>
                <SizedBox size='34px' />
                <P>{card?.name}</P>
                <CardNumberObfuscator number='1234 5678 9158 4587' />
                <SMALL>Validade {card?.exp}</SMALL>
            </CardStyled>
        </HorizontalCenter>
    );
};


export const CardStyled = styled(ViewStyled)`
    width: 300px;
    height: 180px;
    border-radius: 16px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 30px 15px;
`;